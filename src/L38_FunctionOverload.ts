export function L38_FunctionOverload() {
    function sum(nums: number[]): number
    function sum(a: number, b: number): number
    function sum(a: number | number[], b?: number) {
        if(Array.isArray(a)) {
            return a.reduce((sum, current) => sum + current, 0)
        }

        if (b != null) {
            return a + b
        }
    }

    const s1 = sum([1, 2])
    const s2 = sum([1, 2])
    const s3 = sum([1, 2], 5)
}