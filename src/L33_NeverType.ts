export function L33_NeverType() {
    type Todo = {
        title: string
        priority: "High" | "Normal" | "Low" | "Super Low"
        isComplete: boolean
        description?: string
        dueDate: Date | string | number
    }

    const userTodo: Todo = {
        title: "Learn TypeScript",
        priority: "High",
        isComplete: false,
        description: "Learn how to use TypeScript",
        dueDate: new Date()
    }

    extendTodo(userTodo);

    function extendTodo(todo: Todo) {
        switch (todo.priority) {
            case "High":
                console.log("High");
                break;
            case "Normal":
                console.log("Normal");
                break;
            case "Low":
                console.log("Low");
                break;
            case "Super Low":
                break;
            // default
            //     const a: never
            //     return a
        }
    }
}