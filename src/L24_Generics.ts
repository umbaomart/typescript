export function L24_Generics() {
    // const input = document.querySelector<HTMLInputElement>(".input");
    // console.log(input?.value)

    // function getSecond<ArrayType>(array: ArrayType[]) {
    //     return array[1];
    // }

    // const a = [1, 2, 3];
    // const b = ["sdf", "sfgg"];

    // const retA = getSecond(a);
    // const retB = getSecond(b);

    // console.log(retA);
    // console.log(retB);

    // - End Generics

    // Generics Set
    // const a = new Set<string>();
    // a.add(2) // Will Throw Error as string is not assignable to Set Type It must be string
    //- End Generics Set

    // Generics Map
    // const a = new Map<string, number>()
    // a.set("sdf", 3)
    // console.log(a); //- End Generics Map

    // Generics Type
    // type APIResponse<TData> = {
    //     // data: TData
    //     data: TData
    //     isError?: boolean
    // }
    // type BlogResponse = APIResponse<{ title: string }>
    // type UserResponse = APIResponse<{ name: string, age: number }>
    // const a: UserResponse = {
    //     data: {
    //         name: "Kyle",
    //         age: 28
    //     },
    //     isError: false
    // }
    // const b: BlogResponse = {
    //     data: {
    //         title: "Title"
    //     },
    //     isError: false
    // } //- End Generics Type

    // Generic Type for API Response with Status
    // type APIResponse<TData extends Object = {name: string}> = {
    //     data: TData,
    //     isError?: boolean
    // }
    // const a: APIResponse = {
    //     data: {
    //         name: "sdf"
    //     },
    //     isError: false
    // }
    // console.log(a); //- End Generic Type

    // Generic Array Type
    // type APIResponse<TData> = {
    //     data: TData,
    //     isError?: boolean
    // }
    // const a: APIResponse<Array<number>> = {
    //     data: [1, 2, 3],
    //     isError: false
    // }

    // Generic Function
    function atoO<T>(array: [string, T][]) {
        const obj: {
            [index: string]: T
        } = {}
        array.forEach(([key, value]) => {
            obj[key] = value
        })
        return obj
    }

    const arr = [
        ["key1", "value1"],
        ["key2", "value2"],
        ["key3", true],
    ]
    const a = atoO(arr);
}