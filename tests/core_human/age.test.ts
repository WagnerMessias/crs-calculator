import {CoreHuman} from "../../src/enties/CoreHuman"

test('SetAge_LessThan18AndWithSpouseTrue_AgePointZero', () => {
    const expected = 0
    
    const core = new CoreHuman()
    core.age = 17
    core.withSpouse = true
    const received = core.getReport().agePoint

    expect(received).toBe(expected);
});

test('SetAge_BiggerThan44AndWithSpouseTrue_AgePointZero', () => {
    const expected = 0
    
    const core = new CoreHuman()
    core.age = 45
    core.withSpouse = true
    const received = core.getReport().agePoint

    expect(received).toBe(expected);
});

test('SetAge_ValidScorerAndWithSpouseTrue_AgePoint95', () => {
    const expected = 95
    
    const core = new CoreHuman()
    core.age = 30
    core.withSpouse = true
    const received = core.getReport().agePoint

    expect(received).toBe(expected);
});

test('SetAge_LessThan18AndWithSpouseFalse_AgePointZero', () => {
    const expected = 0
    
    const core = new CoreHuman()
    core.age = 17
    core.withSpouse = false
    const received = core.getReport().agePoint

    expect(received).toBe(expected);
});

test('SetAge_BiggerThan44AndWithSpouseFalse_AgePointZero', () => {
    const expected = 0
    
    const core = new CoreHuman()
    core.age = 45
    core.withSpouse = false
    const received = core.getReport().agePoint

    expect(received).toBe(expected);
});

test('SetAge_ValidScorerAndWithSpouseFalse_AgePoint95', () => {
    const expected = 105
    const core = new CoreHuman()
    core.age = 30
    core.withSpouse = false
    const received = core.getReport().agePoint

    expect(received).toBe(expected);
});