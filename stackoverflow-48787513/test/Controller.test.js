const { expect } = require("chai");
const sinon = require("sinon");
const Controller = require("../src/Controller");

describe("Controller", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should use fake get function", () => {
    class MyFakeService {
      get() {
        return "Fake has been called";
      }
    }

    const id = 123;
    Controller.__setServiceClass(MyFakeService);

    const result = Controller.get(id);
    expect(result).to.equal("Fake has been called");
  });
});
