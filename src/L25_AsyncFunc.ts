export function L25_AsyncFunc() {

    // Promise
    // function wait(duration: number): Promise<string> {
    //     return new Promise<string>(resolve => {
    //         setTimeout(() => resolve("Hi!"), duration)
    //     })
    // }
    // wait(100).then(value => {
    //     console.log(value.length);
    // }) //- End Promise

    // Async Await
    async function wait(duration: number) {
        return await fetch("sdfg")
    }
    wait(1000).then(value => {
        console.log(value.json);

    })
    // - End Async Await
}