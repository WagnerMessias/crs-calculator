import {CoreHuman} from "../src/enties/CoreHuman"

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

test('SetLevelEducation_LessThanIndexOneAndWithSpouseTrue_LevelEducationPointZero', () => {
    const expected = 0
    
    const core = new CoreHuman();
    core.withSpouse = true;
    core.levelEducationIndex = -3;
    
    const received = core.getReport().levelEducationPoint

    expect(received).toBe(expected);
});

test('SetLevelEducation_BiggerThanIndexSevenAndWithSpouseTrue_LevelEducationPointZero', () => {
    const expected = 0
    
    const core = new CoreHuman();
    core.withSpouse = true;
    core.levelEducationIndex = 8;
    
    const received = core.getReport().levelEducationPoint

    expect(received).toBe(expected);
});

test('SetLevelEducation_ValidScorerWithSpouseTrue_LevelEducationPoint112', () => {
    const expected = 112
    
    const core = new CoreHuman();
    core.withSpouse = true;
    core.levelEducationIndex = 4;
    
    const received = core.getReport().levelEducationPoint

    expect(received).toBe(expected);
});

test('SetLevelEducation_LessThanIndexOneAndWithSpouseFalse_LevelEducationPointZero', () => {
    const expected = 0
    
    const core = new CoreHuman();
    core.withSpouse = false;
    core.levelEducationIndex = -3;
    
    const received = core.getReport().levelEducationPoint

    expect(received).toBe(expected);
});

test('SetLevelEducation_BiggerThanIndexSevenAndWithSpouseFalse_LevelEducationPointZero', () => {
    const expected = 0
    
    const core = new CoreHuman();
    core.withSpouse = false;
    core.levelEducationIndex = 8;
    
    const received = core.getReport().levelEducationPoint

    expect(received).toBe(expected);
});

test('SetLevelEducation_ValidScorerWithSpouseFalse_LevelEducationPoint120', () => {
    const expected = 120
    
    const core = new CoreHuman();
    core.withSpouse = false;
    core.levelEducationIndex = 4;
    
    const received = core.getReport().levelEducationPoint

    expect(received).toBe(expected);
});