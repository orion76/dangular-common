/**
 * Simple is object check.
 */
export function isObject(item: any | null) {
  return (item && typeof item === 'object' && !Array.isArray(item)) && item !== null;
}

/**
 * Deep merge two objects.
 */
export function mergeDeep(target: any, source: any) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {[key]: {}});
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    });
  }
  return target;
}

/**
 * Deep merge two objects.
 */
export function extractIntersects(source: any, keys: any) {
  const result = {};
  if (isObject(source) && isObject(keys)) {
    Object.keys(keys).forEach(key => {
      if (isObject(keys[key])) {
        result[key] = extractIntersects(source[key], keys[key]);
      } else {
        result[key] = source[key];
      }
    });
  }
  return result;
}

/**
 * Deep merge two objects.
 */
export function extractDiff(source: any, keys: any) {
  const result = {};
  if (isObject(source) && isObject(keys)) {
    Object.keys(source).forEach(sourceKey => {
      if (false === Boolean(keys[sourceKey])) {
        result[sourceKey] = source[sourceKey];
      }

      if (isObject(keys[sourceKey])) {
        const diff = extractDiff(source[sourceKey], keys[sourceKey]);

        if (Object.keys(diff).length > 0) {
          result[sourceKey] = diff;
        }
      }
    });
  }
  return result;
}
