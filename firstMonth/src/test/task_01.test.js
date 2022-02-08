const getDays = require('../task_01');

describe('Test getDays function', () => {

    test('Correct calculation test', () => {
        expect(getDays(2020 , 2)).toEqual(29);
    })

    test('Correct calculation test-2', () => {
        expect(getDays(2021 , 4)).toEqual(30);
    })

    test('Test for incorrect calculation', () => {
        expect(getDays(3000,3)).toEqual(false);
    })

    test('test for wrong format1', () => {
        expect(getDays('ssdsd', 5)).toEqual(false);
    })

    test('Test for emptiness ', () => {
        expect(getDays('','')).toEqual(false);
    })
})