export function L31_Awaited() {
    type Async = Promise<Promise<string>>

    async function doSomething() {
        return 3
    }

    type Value = Awaited<ReturnType<typeof doSomething>>
}