var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Shobhit', 'Hi!');
        expect(message.from).toBe('Shobhit');
        expect(message.text).toBe('Hi!');
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var message = generateLocationMessage('Shobhit', 1, 1);
        expect(message.from).toBe('Shobhit');
        expect(message.url).toBe('https://www.google.com/maps?q=1,1');
        expect(message.createdAt).toBeA('number');
    });
});