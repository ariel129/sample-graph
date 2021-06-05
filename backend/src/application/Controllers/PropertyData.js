const PropertyDataService = require("../Services/PropertyData");

const propertyDataService = new PropertyDataService();

exports.new = async (req, res) => {
  try {
    const { isValid, data } = await propertyDataService.create(req, res);
    if (isValid === true) {
      return res.json({
        status: 200,
        message: "You've successfully created.",
        data: data,
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

exports.lists = async (req, res) => {
  try {
    const { isValid, data } = await propertyDataService.lists(req, res);
    if (isValid === true) {
      return res.json({
        status: 200,
        message: "You've successfully get the property data lists.",
        data: data,
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

exports.view = async (req, res) => {
  try {
    const { isValid, data } = await propertyDataService.view(req, res);
    if (isValid === true) {
      return res.json({
        status: 200,
        message: `You've successfully get the property data by: ${req.params.id}.`,
        data: data,
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
