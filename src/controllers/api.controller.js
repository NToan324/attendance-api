const apiService = require("../services/api.service");
const form = {
  submit: async (req, res) => {
    const data = req.body;
    try {
      console.log("Received data from control:", data);
      const result = await apiService.submit(data);
      if (result) {
        console.log("check result:", result);
        return res.status(200).send({
          errCode: 0,
          message: "Submit form successful",
          data: result,
        });
      }
      return res.status(400).send({
        errCode: 1,
        message: "Data is empty",
      });
    } catch (error) {
      console.error("Error in form.submit:", error.message);
      return res.status(400).send({
        errCode: 1,
        message: "Can not submit form",
      });
    }
  },
};

module.exports = form;
