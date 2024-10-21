const Form = require("../models/form.model");

const formService = {
  submit: async (data) => {
    try {
      if (!data || data.length === 0) {
        throw new Error("Data is empty or not an array");
      }

      console.log("Received data:", data);

      const newForm = await Form.insertMany(data);
      console.log("Inserted data:", newForm);

      return newForm;
    } catch (error) {
      console.error("Error in formService.submit:", error.message);
      throw new Error("Failed to submit form data: " + error.message);
    }
  },
};

module.exports = formService;
