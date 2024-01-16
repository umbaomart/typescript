export function L29_Record() {

    type Person = {
        name: string
        age: number
    }
    // type PeopleGroupByName = {
    //     [index: string]: Person[]
    // }

    type PeopleGroupByName = Record<Person["name"], Person[]>
}