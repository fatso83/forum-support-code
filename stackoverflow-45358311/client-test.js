const assert = require('assert');
const createUser = require('./client');

const user1 = createUser('Johnny Doe');
const user2 = createUser('Kari Nordmann');
describe('tests for user1', function() {
  require('./shared-tests')(user1);

  it('should check something unique for user1', function() {
    assert.equal(user1.name, 'Johnny Doe');
  });
});

describe('tests for user2', function() {
  require('./shared-tests')(user2);

  it('should check something unique for user2', function() {
    assert.equal(user2.name.length, 13);
  });
});
