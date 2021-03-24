export class Utils {
  public static toCamelCase<T>(data: string): T {
    const matchingReg = /({|\,)"([a-z0-9]+)(_([a-z0-9]+|[A-Z0-9]+))+":/gm;
    const modifyKeyPart = (part) => {
      return part.replace(/_[a-zA-Z0-9]/gm, (prefix) => prefix.toUpperCase().replace('_', ''));
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
