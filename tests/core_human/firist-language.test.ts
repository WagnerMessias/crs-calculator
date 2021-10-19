import {CoreHuman} from "../../src/enties/CoreHuman"

test('SetFirstLanguage_InvalidCLBAndWithSpouseTrue_FirstLanguagePointZero', () => {
    const expected = 0
    
    const core = new CoreHuman()
    const levelCLB = 3;
    core.firstCLB = levelCLB
    core.withSpouse = true
    const received = core.getReport().firstLanguagePoint

    expect(received).toBe(expected);
});

test('SetFirstLanguage_ValidCLBAndWithSpouseTrue_FirstLanguagePoint16', () => {
    const expected = 16
    
    const core = new CoreHuman()
    const levelCLB = 7;
    core.firstCLB = levelCLB
    core.withSpouse = true
    const received = core.getReport().firstLanguagePoint

    expect(received).toBe(expected);
});

test('SetFirstLanguage_InvalidCLBAndWithSpouseFalse_FirstLanguagePointZero', () => {
    const expected = 0
    
    const core = new CoreHuman()
    const levelCLB = 3;
    core.firstCLB = levelCLB
    core.withSpouse = false
    const received = core.getReport().firstLanguagePoint

    expect(received).toBe(expected);
});

test('SetFirstLanguage_ValidCLBAndWithSpouseFalse_FirstLanguagePoint34', () => {
    const expected = 34
    
    const core = new CoreHuman()
    const levelCLB = 10;
    core.firstCLB = levelCLB
    core.withSpouse = false
    const received = core.getReport().firstLanguagePoint

    expect(received).toBe(expected);
});

test('SetFirstLanguage_ValidCLBAndWithSpouseFalse_FirstLanguagePoint34', () => {
    const expected = 34
    
    const core = new CoreHuman()
    const levelCLB = 10;
    core.firstCLB = levelCLB
    core.withSpouse = false
    const received = core.getReport().firstLanguagePoint

    expect(received).toBe(expected);
});