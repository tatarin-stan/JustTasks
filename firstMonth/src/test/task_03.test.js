const every = require('../task_03');

describe('Test every function', () => {

    test('Correct calculation test', () => {
        expect(every([8, 2, 4])).toEqual(true);
    })

    test('Correct calculation test-2', () => {
        expect(every([8, 12, 4])).toEqual(true);
    })

    test('Test for incorrect calculation', () => {
        expect(every([8, 3, 4])).toEqual(false);
    })

    test('test for wrong format-1', () => {
        expect(every([])).toEqual('error');
    })
    test('test for wrong format-2', () => {
        expect(every([1])).toEqual('error');
    })

    test('Test for emptiness ', () => {
        expect(every()).toEqual('error');
    })
})