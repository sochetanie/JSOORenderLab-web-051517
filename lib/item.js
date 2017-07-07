class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
    // this.id = id

  }

    renderItem() {
        return (
            `<li>${this.name} - $${this.price}
            <a href="#" class='add' data-name='${this.name}' data-price='${this.price}'>Add to Cart</a></li>`
            )
    }

    renderItemForCart() {
        return `<li>${this.name} - $${this.price}
            <a href="#" class='remove' data-name='${this.name}' data-price='${this.price}'>Remove</a></li>`
    }

}

