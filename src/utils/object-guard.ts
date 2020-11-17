export const isObject = (testObject: unknown): testObject is object => {
  return testObject === Object(testObject) && typeof testObject !== 'function';
};
