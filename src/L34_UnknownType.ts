/**
 * Represents a value whose type is unknown.
 *
 * @typedef {unknown} UnknownType
 * @description The `unknown` type is introduced in TypeScript 3.0. It is similar to the `any` type, but with stricter type checking.
 * It is often used when the type of a value is not known at compile-time or when working with dynamic data.
 *
 * @example
 * let value: unknown;
 *
 * if (typeof value === "string") {
 *   console.log(value.toUpperCase());
 * } else if (typeof value === "number") {
 *   console.log(value.toFixed(2));
 * }
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown TypeScript Documentation - Unknown}
 */
export function L34_UnknownType() {

    function func(data: unknown) {
        if(data != null && typeof data === "object" && "name" in data && typeof data.name === "string") {
            console.log(data.name);
        }
    }
}