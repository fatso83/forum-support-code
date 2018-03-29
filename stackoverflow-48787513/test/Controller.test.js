const { expect } = require("chai");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

class MyFakeService {}
const Controller = proxyquire("../src/Controller", {
  "./Service": MyFakeService
});

describe("Controller", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should use fake get function", () => {
    const id = 123;
    const stub = sinon.stub();
    stub.returns("Fake has been called");

    MyFakeService.prototype.get = stub;

    const result = Controller.get(id);
    expect(result).to.equal("Fake has been called");
  });
});
