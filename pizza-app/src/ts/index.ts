import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector('.root')!

function createPizzaTemplate(pizza: PizzaProps): string {
    return `
        <div class='pizza'>
            <h2>${pizza.title}</h2>
            <p class='toppings'>${pizza.toppings.join(', ')}</p>
            <p>${pizza.description}</p>
            <span>$${pizza.price}</span>
        </div>
    `
}

function renderTemplate(template: string[], parent: Element) {
    const templateElement = document.createElement('template')

    for (const t of template) {
        templateElement.innerHTML += t
    }

    parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {
    // Load the pizza data
    const pizzas = await Pizza.loadAll()

    // Create template string for each pizza
    const pizzaTemplate = pizzas.map(createPizzaTemplate)

    // Render pizza template to DOM
    renderTemplate(pizzaTemplate, rootElement)
})