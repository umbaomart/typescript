export function L23_Tuples() {
    const person = {
        name: "Kyle",
        age: 28,
    }

    Object.entries(person).forEach(([key, value]) => {
        console.log(key, value);
    })

    type Tuple = [string, boolean]
    const a: Tuple = ["string", true]
    console.log(a);
}