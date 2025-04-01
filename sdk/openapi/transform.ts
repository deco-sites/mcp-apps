export type Types = "integer" | "string" | "boolean" | "number" | "object";

export function transformType(openApiType: Types): string {
  switch (openApiType) {
    case "integer":
      return "number";
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
    case "object":
      return "object";
    default:
      return "any";
  }
}

export function toCamelCase(str: string) {
  return str
    .replace(/[-_]+(.)/g, (_match, letter) => letter.toUpperCase())
    .replace(/^(.)/, (_match, letter) => letter.toLowerCase());
}

export function transformPath(str: string) {
  return str.replace(/{([^}]+)}/g, ":$1");
}
