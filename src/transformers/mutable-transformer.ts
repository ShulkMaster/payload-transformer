/**
 * @summary This transformer does not allocate any new objects while
 * changing the keys instead it mutates the keys by appending the new ones and
 * deleting the old ones.
 *
 * @param payload the object which keys naming convention should be change
 * @param transformation is the function that will will transform the string key
 * into another string as the new key
 * @returns the object after transformation in all keys
 */
export const mutableTransformer = (payload: unknown, transformation: (s: string) => string): unknown => {
  if (payload instanceof Object) {
    if (Array.isArray(payload)) {
      for (const obj of payload) {
        mutableTransformer(obj, transformation);
      }
      return payload;
    }
    for (const k of Object.keys(payload)) {
      payload[transformation(k)] = mutableTransformer(payload[k], transformation);
      delete payload[k];
    }
  }
  return payload;
};
