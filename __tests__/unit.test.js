// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber("(626)123-1234")).toBe(true);
    expect(functions.isPhoneNumber("+1(123)123-1234")).toBe(true);
    expect(functions.isPhoneNumber("6261231234")).toBe(false);
    expect(functions.isPhoneNumber("abc@gmail.com")).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail("abc@gmail.com")).toBe(true);
    expect(functions.isEmail("abc@ucsd.edu")).toBe(true);
    expect(functions.isEmail("hi@hello")).toBe(false);
    expect(functions.isEmail("123456789")).toBe(false);
});

test('isEmail', () => {
    expect(functions.isEmail("abc@gmail.com")).toBe(true);
    expect(functions.isEmail("abc@ucsd.edu")).toBe(true);
    expect(functions.isEmail("hi@hello")).toBe(false);
    expect(functions.isEmail("123456789")).toBe(false);
});

test('isStrongPassword', () => {
    expect(functions.isStrongPassword("abcd1234")).toBe(true);
    expect(functions.isStrongPassword("Abcd_123_")).toBe(true);
    expect(functions.isStrongPassword("@BCD1234")).toBe(false);
    expect(functions.isStrongPassword("123456789")).toBe(false);
});

test('isDate', () => {
    expect(functions.isDate("01/01/2022")).toBe(true);
    expect(functions.isDate("1/1/2022")).toBe(true);
    expect(functions.isDate("2022/11/17")).toBe(false);
    expect(functions.isDate("11/17/22")).toBe(false);
});

test('isHexColor', () => {
    expect(functions.isHexColor("#30D5C8")).toBe(true);
    expect(functions.isHexColor("#FFF")).toBe(true);
    expect(functions.isHexColor("#FFFF")).toBe(false);
    expect(functions.isHexColor("#XYZXYZ")).toBe(false);
});