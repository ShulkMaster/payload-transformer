
export const allocatorTransformer = (
  payload: unknown,
  transformation: (x: string) => string
): unknown => {
  if (!payload) {
    return payload;
  }
  const newObj: { [k: string]: unknown } = {};
  for (const [key, value] of Object.entries(payload)) {
    if (Array.isArray(value)) {
      newObj[transformation(key)] = value.map(e => allocatorTransformer(e, transformation));
      continue;
    }
    if (value instanceof Object) {
      newObj[transformation(key)] = allocatorTransformer(value, transformation);
      continue;
    }
    newObj[transformation(key)] = value;
  }
  return newObj;
};
