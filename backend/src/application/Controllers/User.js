const UserService = require("../Services/User");

const userService = new UserService();

// Handle signup actions
exports.signup = async (req, res) => {
  try {
    // connect the signup to user service
    const { isValid, message } = await userService.signup(req, res);
    if (isValid === true) {
      return res.json({
        status: 200,
        message: "You've successfully sign up.",
      });
    } else {
      return res.json({
        status: 400,
        message: message,
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
      code: 400,
    });
  }
};

// Handle signin actions
exports.signin = async (req, res) => {
  try {
    const { isValid, message, data } = await userService.signin(req, res);
    if (isValid === true) {
      return res.json({
        status: 200,
        message: "You've successfully sign in",
        data: data,
      });
    } else {
      return res.json({
        status: 400,
        message: message,
      });
    }
  } catch (err) {
    return res.json({
      data: null,
      message: err.message,
      code: 400,
    });
  }
};

// Handle refresh actions
exports.refresh = async (req, res) => {
  try {
    const { isValid, message } = await userService.refresh(req, res);
    if (isValid === false) {
      return res.json({
        status: 201,
        message: message,
      });
    }

    return res.json({
      status: 200,
      message: message,
    });
  } catch (err) {
    return res.json({
      message: err.message,
      code: 400,
    });
  }
};
