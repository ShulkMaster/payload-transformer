
export const allocatorTransfor = (
  payload: unknown,
  transformation: (x: string) => string
): unknown => {
  if (!payload) {
    return payload;
  }
  const newObj: { [k: string]: unknown } = {};
  for (const [key, value] of Object.entries(payload)) {
    if (Array.isArray(value)) {
      newObj[transformation(key)] = value.map(e => allocatorTransfor(e, transformation));
      continue;
    }
    if (value instanceof Object) {
      newObj[transformation(key)] = allocatorTransfor(value, transformation);
      continue;
    }
    newObj[transformation(key)] = value;
  }
  return newObj;
};
