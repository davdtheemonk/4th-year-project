const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reportSchema = new mongoose.Schema(
  {
    reporter: {
      type: String,
    },
    report: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
