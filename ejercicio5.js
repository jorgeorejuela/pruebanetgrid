function inventoryList() {
    return {
        items: [],
        add: function(item) {
            if (this.items.includes(item)) {
                return
            }
            this.items.push(item);
        },
        remove: function(item) {
            if (this.items.includes(item)) {
                let index = this.items.indexOf(item)
                if (index > -1) {
                    this.items.splice(index, 1)
                }
            }
        },
        getList: function() {
            return this.items
        }
    }

}

const a = new inventoryList();
a.add('camisa');
a.add('pantalón');
console.log(a.getList());
a.remove('camisa');
console.log(a.getList());