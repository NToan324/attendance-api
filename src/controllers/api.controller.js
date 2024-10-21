const apiService = require("../services/api.service");
const form = {
  submit: async (req, res) => {
    const data = req.body;
    try {
      const result = await apiService.submit(data);
      if (result) {
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
      return res.status(400).send({
        errCode: 1,
        message: "Can not submit form",
      });
    }
  },
};

module.exports = form;
