const Service = require("./Service");

module.exports = {
  get: id => {
    //validates id
    return new Service().get(id);
  }
};
