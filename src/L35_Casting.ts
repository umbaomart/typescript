/**
 * Represents a type assertion or type casting in TypeScript.
 *
 * @typedef {Object} TypeCasting
 * @property {<T>(expression: any) => expression is T} isAssert - The type assertion syntax, which is used to tell the TypeScript compiler that a value is of a specific type.
 * @property {<T>(expression: any) => T} angleBracket - The angle bracket syntax, which is an alternative form of type assertion used to convert a value to a specific type.
 * @property {as} as - The `as` keyword, which is another form of type assertion used to convert a value to a specific type.
 *
 * @example
 * // Type Assertion using isAssert
 * if (typeof value === "string") {
 *   if (isString(value)) {
 *     console.log(value.toUpperCase());
 *   }
 * }
 *
 * // Type Assertion using angle bracket
 * let someValue: any = "hello world";
 * let strLength: number = (<string>someValue).length;
 *
 * // Type Assertion using 'as' keyword
 * let someValue: any = "hello world";
 * let strLength: number = (someValue as string).length;
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions TypeScript Documentation - Type Assertions}
 */
export function L35_Casting() {
    type Todo = {
        title: string
    }

    function func(data: unknown) {
        fetch("sdfds").then(res => res.json).then(data => {
            return data as Todo
        }).then(todo => {

        })
    }
}