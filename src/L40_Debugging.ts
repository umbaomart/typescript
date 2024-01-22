export function L40_Debugging() {
    type Options = {
        type: boolean
        format: {
            tab: boolean
            tabWith: number
        }
    }

    function printNumber(num: number, options?: Options) {
        // console.log(num);
    }

    // printNumber(3, { debug: false, format: { tab: true } });

    // Note: use --inspect-brk for debugging
    // Look at the end of the msg after hover to see the error message
    // Add extension Pretty TypeScript Error

    // Ignore TypeScript Error with @ts-ignore or @ts-expect-error
    // @ts-ignore: debug is not defined
    printNumber(3, { debug: false, format: { tab: true } });

    // @ts-expect-error: debug is not defined
    printNumber(3, { debug: false, format: { tab: true } });


}