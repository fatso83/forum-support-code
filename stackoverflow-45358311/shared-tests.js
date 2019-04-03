const assert = require("assert");

module.exports = function(user) {
  describe("reusable tests with different user objects", function() {
    it("should have a name", function() {
      assert(typeof user !== "undefined");
    });
  });
};
