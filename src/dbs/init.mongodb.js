const mongoose = require("mongoose");

const connectString = `mongodb+srv://nhattoan664t:V7P6scODqI4BXn9p@attendanceapi.fcnv2.mongodb.net/`;
class Database {
  constructor() {
    this.connect();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  // connect
  connect(type = "mongodb") {
    mongoose
      .connect(connectString)
      .then((_) => {
        console.log("Connect db successful!");
      })
      .catch((e) => {
        console.log(e);
        console.log("Connect db fail!");
      });
  }
}

const instanceMongodb = Database.getInstance();
module.export = instanceMongodb;
