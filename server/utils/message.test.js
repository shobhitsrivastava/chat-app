var expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Shobhit', 'Hi!');
        expect(message.from).toBe('Shobhit');
        expect(message.text).toBe('Hi!');
        expect(message.createdAt).toBeA('number');
    });
});