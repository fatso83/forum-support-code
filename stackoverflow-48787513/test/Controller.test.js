const { expect } = require("chai");
const sinon = require("sinon");
const Controller = require("../src/Controller.js");
const Service = require("../src/Service.js");

describe("Controller", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("should use fake get function", () => {
    sandbox.stub(Service.prototype, "get").callsFake(() => {
      return "Fake has been called";
    });

    const id = 123;
    const result = Controller.get(id);
    expect(result).to.equal("Fake has been called"); //returns 'actual function'
  });
});
