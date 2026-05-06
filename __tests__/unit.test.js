// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('\(123\) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('\(123\) 456-7890')).toBe(true);
});
test('456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});
test('456-7x90 is NOT a valid phone number', () => {
  expect(isPhoneNumber('456-7x90')).toBe(false);
});
test('\(123\)  456- 7890 is NOT a valid phone number', () => {
  expect(isPhoneNumber('\(123\)  456- 7890')).toBe(false);
});

test('www@ucsd.edu is a valid email', () => {
  expect(isEmail('www@ucsd.edu')).toBe(true);
});
test('w8ww@ucsd.edu is a valid email', () => {
  expect(isEmail('w8ww@ucsd.edu')).toBe(true);
});
test('wwwucsd.edu is NOT a valid email', () => {
  expect(isEmail('wwwucsd.edu')).toBe(false);
});
test('@ucsd.edu is NOT a valid email', () => {
  expect(isEmail('@ucsd.edu')).toBe(false);
});

test('wwww is a valid strong password', () => {
  expect(isStrongPassword('wwww')).toBe(true);
});
test('wwwucsdedu is a valid strong password', () => {
  expect(isStrongPassword('wwwucsdedu')).toBe(true);
});
test('www@ucsd.edu is NOT a valid strong password', () => {
  expect(isStrongPassword('www@ucsd.edu')).toBe(false);
});
test('1234567890 is NOT a valid strong password', () => {
  expect(isStrongPassword('1234567890')).toBe(false);
});

test('12/34/5678 is a valid date', () => {
  expect(isDate('12/34/5678')).toBe(true);
});
test('00/00/0000 is a valid date', () => {
  expect(isDate('00/00/0000')).toBe(true);
});
test('12-34-5678 is NOT a valid date', () => {
  expect(isDate('12-34-5678')).toBe(false);
});
test('1234567890 is NOT a valid date', () => {
  expect(isDate('1234567890')).toBe(false);
});

test('123 is a valid hex color', () => {
  expect(isHexColor('123')).toBe(true);
});
test('#123123 is a valid hex color', () => {
  expect(isHexColor('123')).toBe(true);
});
test('#123123# is NOT a valid hex color', () => {
  expect(isHexColor('#123123#')).toBe(false);
});
test('#123123123 is NOT a valid hex color', () => {
  expect(isHexColor('#123123123')).toBe(false);
});