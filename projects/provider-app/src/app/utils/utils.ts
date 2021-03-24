import { environment } from '../../environments/environment';
import 'reflect-metadata';

const fullUrl = Symbol('fullUrl');

export class Utils {
  public static preciseRound(num: number, decimals: number): string {
    const sign = num >= 0 ? 1 : -1;
    return (Math.round((num * Math.pow(10, decimals)) + (sign * 0.001))
      / Math.pow(10, decimals)).toFixed(decimals);
  }

  public static clone<T>(src: T): T {
    try {
      return JSON.parse(JSON.stringify(src));
    } catch (e) {
      console.error('Error trying clone', src);
    }
  }

  public static pushUniq<T>(arr: T[], item: any, comparator: (a: T, b: T) => boolean): T[] {
    const temp = Utils.clone(arr);

    if (!(temp.length)) {
      temp.push(item);
      return temp;
    }

    const exist = arr.findIndex((val, idx, self) => comparator(val, item));
    if (exist !== -1) temp[exist] = item;
    else temp.push(item);
    return temp;
  }

  public static compareArrays(arr1: Array<any>, arr2: Array<any>): boolean {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;
    for (const i in arr1) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  public static debounce(delay: number = 300): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

      const original = descriptor.value;
      const key = `__timeout__${propertyKey}`;

      descriptor.value = function (...args) {
        clearTimeout(this[key]);
        this[key] = setTimeout(() => original.apply(this, args), delay);
      };

      return descriptor;
    };
  }

  public static OERequest(path: string) {
    return Reflect.metadata(fullUrl, `${environment.apiDomain}/api/${path}/`);
  }

  public static buildUrl(target: any, propertyKey: string, path: string): string {
    return `${Reflect.getMetadata(fullUrl, target, propertyKey)}${path.length ? path + '/' : path}`;
  }

  public static toCamelCase<T>(data: string): T {
    const matchingReg = /({|\,)"([a-z0-9]+)(_[a-z0-9]+)+":/gm;
    const modifyKeyPart = (part) => {
      return part.replace(/_[a-z0-9]/gm, (prefix) => prefix.toUpperCase().replace('_', ''));
    };
    return JSON.parse(data.replace(matchingReg, (keyPart) => modifyKeyPart(keyPart)));
  }

  public static toSnakeCase<T>(data: string): T {
    const matchingReg = /({|\,)"([a-z0-9]+)([A-Z][a-z0-9]*)+":/gm;
    const modifyKeyPart = (part) => {
      return part.replace(/([a-z][A-Z]|[a-z][0-9]|[0-9][A-Z])/gm, (prefix) => prefix.toLowerCase()[0] + '_' + prefix.toLowerCase()[1]);
    };
    return JSON.parse(data.replace(matchingReg, (keyPart) => modifyKeyPart(keyPart)));
  }
}
