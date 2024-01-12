/**
 * Lesson 21 Index Types
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
export function L21_IndexTypes() {
    type SkillLevel = "Beginner" | "Intermediate" | "Expert"
    type Person = {
        name: string
        skillLevel: SkillLevel
    }

    // type PeopleGroupedBySkillLevel = {
    //     // [index: Person["name"]]: Person[]
    //     [index in Person["skillLevel"]]: Person[]
    // }

    // const a: PeopleGroupedBySkillLevel = {
    //     "Beginner": [{ name: "Kyle", skillLevel: "Beginner" }]
    // }

    // Either array or boolean
    // const b: (string | boolean)[] = ["sdf", "d", true]
    // type A = (typeof b)[number]

    const a = {
        name: "Kyle",
        age: 28,
        isProgrammer: true
    }

    // type A = (typeof a)["name"]
    type A = (typeof a)[keyof typeof a]

    console.log(a);

}