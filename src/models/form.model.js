const mongoose = require("mongoose");
const { Schema } = mongoose;

const formSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  studentCode: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  location: {
    type: [Number],
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
