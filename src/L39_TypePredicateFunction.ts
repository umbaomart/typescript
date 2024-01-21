export function L39_TypePredicateFunction() {
    // Example 1
    // type Person = {
    //     name: string
    // }

    // type Todo = {
    //     title: string
    // }

    // function print(obj: Person | Todo) {
    //     if (isPerson(obj)) {
    //         console.log(obj.name)
    //         return
    //     }

    //     console.log(obj.title)
    // }

    // function isPerson(obj: Person | Todo): obj is Person {
    //     return "name" in obj
    // } // - End Example 1

    // Example 2
    const PRIORITIES = ["High", "Medium", "Low"] as const

    type Priority = (typeof PRIORITIES)[number]

    type Todo = {
        title: string
        description: string
    }

    function func(todo: Todo) {
        if (isPriority(todo.description)) {
            todo.description
        } else {
            todo.description
        }
    }

    function isPriority(description: string): description is Priority {
        return PRIORITIES.includes(description as Priority)
    }

    const myTodo: Todo = {
        title: "Learn TypeScript",
        description: "High",
    }

    func(myTodo)
}