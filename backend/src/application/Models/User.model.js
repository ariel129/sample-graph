module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    create_date: {
      type: Date,
      default: Date.now,
    },
  });

  const User = (module.exports = mongoose.model("user", schema));

  return User;
};
