import { get } from 'lodash';
import ol from 'openlayers';

function isObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}

export function createOlObject(config) {
  const { olClass = 'Map' } = config;
  const clazz = get(ol, olClass);
  delete config.olClass;
  for (const [propName, propValue] of Object.entries(config)) {
    if (isObject(propValue)) {
      config[propName] = createOlObject(propValue);
    } else if (Array.isArray(propValue)) {
      for (const [i, item] of propValue.entries()) {
        if (isObject(item)) {
          propValue[i] = createOlObject(item);
        }
      }
    }
  }

  return Reflect.construct(clazz, [config]);
}
