const db = require("../Models");

const bcrypt = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");

const User = db.User;

class UserService {
  // Create and Save a new user
  async signup(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username.toLowerCase() });

    if (user) {
      return {
        isValid: false,
        message: "Username is already exists!",
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const results = await User.create({
      username: username.toLowerCase(),
      password: hash,
    });

    if (results)
      return {
        isValid: true,
      };
  }

  // SignIn a user
  async signin(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username.toLowerCase() });

    if (user === null) {
      return {
        isValid: false,
        message: "Username doesn't exists!",
      };
    }

    const valid = await bcrypt.compare(password, user.password);

    if (valid === false) {
      return {
        isValid: false,
        message: "Password doesn't match!",
      };
    }

    return {
      isValid: true,
      data: {
        id: user._id,
        username: user.username,
        accessToken: await this.createAccessToken(user._id),
      },
    };
  }

  // Validate token
  async refresh(req, res) {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];

    const payload = verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      function (err, decoded) {
        if (err) {
          return false;
        } else {
          return decoded;
        }
      }
    );

    if (payload === false) {
      return {
        isValid: false,
        message: "Token is already expired!",
      };
    }

    return {
      isValid: true,
      message: "",
    };
  }

  async createAccessToken(id) {
    return sign({ user_id: id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  }
}

module.exports = UserService;
