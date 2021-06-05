module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    propertyId: {
      type: Number,
      required: true,
    },
    propertyName: {
      type: String,
      required: true,
    },
    income: {
      type: Object,
      required: true,
    },
    expense: {
      type: Object,
      required: true,
    },
    create_date: {
      type: Date,
      default: Date.now,
    },
  });

  const PropertyData = (module.exports = mongoose.model(
    "propertyData",
    schema
  ));

  return PropertyData;
};
