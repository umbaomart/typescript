export function L22_ConstAndEnums() {
    // Const and Enums
    // let a = 1
    // const b = 1 as const //- Defining const in TypeScript
    // - End Const and Enums

    // Array of const
    // const nums = ["1", "2", "3"] as const
    // const a = nums[0]
    // nums.push("4") // Error pushing to const array due to as const declaration above
    // - End Array of const

    // Array of const with enum
    // const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const
    // type Person = {
    //     skillLevel: (typeof SKILL_LEVELS)[number]
    // }
    // SKILL_LEVELS.forEach(skillLevel => {
    //     console.log(skillLevel);
    // }) //- End Array of const

    // Object with const
    const person = {
        name: "Kyle",
        age: 28,
        address: {
            street: "Main"
        }
    } as const

    // person.address.street = "Other" // Error due to as const declaration
    // person.address.zipcode = "12345" // Error due to as const declaration and no zipcode property
    // person.age = 2 // Error due to as const declaration
    // - End Object with const
}
