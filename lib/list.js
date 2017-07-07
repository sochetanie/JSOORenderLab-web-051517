class List {
    constructor() {
        this.items = []
    }

    addItem(name, price) {
        const newItem = new Item(name, price)
        this.items.push(newItem)
    }

    // renderList() {
    //     return this.items.map(x => {
    //         x.renderItem()
    //     }).join('')
    // }

    removeItem(name, price) {
        return this.items.filter(x => {
            return (x.name !== name && x.price !== price)
        })
    }

}
