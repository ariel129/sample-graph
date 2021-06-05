const db = require("../Models");

const PropertyData = db.PropertyData;

class PropertyDataService {
  async lists(req, res) {
    const results = await PropertyData.find();

    if (results)
      return {
        isValid: true,
        data: results,
      };
  }

  async create(req, res) {
    const { propertyId, propertyName, income, expense } = req.body;

    const results = await PropertyData.create({
      propertyId: propertyId,
      propertyName: propertyName,
      income: income,
      expense: expense,
    });

    if (results)
      return {
        isValid: true,
        data: results,
      };
  }

  async view(req, res) {
    const { id } = req.params;

    const results = await PropertyData.findOne({ propertyId: id });

    if (results)
      return {
        isValid: true,
        data: results,
      };
  }
}

module.exports = PropertyDataService;
