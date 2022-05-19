import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)


const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)


const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)


const totalCost = foundMetal.price + foundSize.price + foundStyle.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
    
    
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"
    
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



// Timed practice question on 5/18
/*const pootyMan = (n) => {
    for (let i = 1; i <= n; i++) {
         if (i %3  === 0 && i % 5 === 0){
            console.log('Pooty Man!')
        }
        else if (i % 3 === 0) {
            console.log('Pooty')}
        else if (i % 5 === 0) {
            console.log('Man')
        }
        else (console.log(i + ' '))
    }
}

pootyMan(40)*/