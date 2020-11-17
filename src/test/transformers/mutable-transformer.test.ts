import { mutableTransformer } from '../../transformers/mutable-transformer';
import { toCamelCase } from '../../cases/camel-case';
import { createSnakeCaseObject, createCamelCaseObject } from '../../utils/test-data';


describe('Mutable transfor test', () => {
  it('should return snake object as camel case', () => {
    const test = createSnakeCaseObject(2);
    const result = mutableTransformer(test, toCamelCase);
    expect(result).toEqual(createCamelCaseObject(2));
  });
});
