const helloWorld = require('./helloWorld');

describe('Ciao Mondo!', function() {
  test('Dice "Ciao Mondo!"', function() {
    expect(helloWorld()).toEqual('Ciao Mondo!');
  });
});
