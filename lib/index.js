$(function() {
    listListener()
    addToCart()
    deleteFromCart()
});

    function listListener() {
      $('button').on("click", function(){
        let name = $('#name').val()
        let price = $('#price').val()
        $('#name').val('')
        $('#price').val('')

        let newItem = new Item(name, price) 
        // debugger
        $('.list').append(newItem.renderItem())
      })
    }

    function addToCart() {
            // debugger
        $('.list').on('click', '.add', function() {
            event.preventDefault()
            let newItem = new Item(this.dataset.name, this.dataset.price)

            let newList = new List()
            newList.addItem(newItem)

            newList.removeItem(newItem)
            this.parentElement.remove()
            // debugger
            $('#cart').append(newItem.renderItemForCart())
        })
    }

    function deleteFromCart() {
        // debugger
        $('#cart').on('click', '.remove', function() {
            event.preventDefault()
            let newItem = new Item(this.dataset.name, this.dataset.price)
            // debugger
            let newCart = new Cart()
            newCart.addItem(newItem)
            newCart.removeFromCart(newItem)
            // debugger
            this.parentElement.remove()
        })
    }

