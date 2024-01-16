export default function L28_ReturnTypeAndParameters() {

    // ReturnType is used to get the return type of a function
    function checkLength(a: string, b: number) {
        return a.length > b
    }

    type ReturnOfLengthCheck = ReturnType<typeof checkLength> // ReturnType is used to get the return type of a function
    //- End ReturnType

    // Parameters is used to get the parameters of a function
    function checkLength2(a: string, b: number) {
        return a.length > b
    }

    type Func = () => void

    // type Params = Parameters<typeof checkLength2>[1]
    // type Params = Parameters<Func>

    type Params = booelean
    //- End Parameters
}