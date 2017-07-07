class Cart {
    constructor() {
        this.items = []
    }

    addItem(name, price) {
        const newItem = new Item(name, price)
        this.items.push(newItem)
    }

    // renderCart() {
    //     return this.items.map(item => {
    //         return item.renderItemForCart()
    //     }).join('')
    //     // return newItems
    // }
    
    removeFromCart(name, price) {
        return this.items.filter(x => {
            return (x.name !== name && x.price !== price)
        })
    }

}
