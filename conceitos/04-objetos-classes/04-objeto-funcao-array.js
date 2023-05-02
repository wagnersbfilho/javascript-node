function inventoryList() {

    const inventory = {
        listInventory: ['teste','aaa','teste','www'],

        add: function (value) {
            this.listInventory.push(value);
        },

        remove: function (value) {
            const index = this.listInventory.indexOf(value);
            if (index >= 0) {
                this.listInventory.splice(index, 1);
            }
        },

        getList: function () {
            return this.listInventory;
        }
    }
    return inventory;

    // write your code here
}
function main() {
    const obj = inventoryList();
    const operationCount = 5;

    for(let i = 1; i <= operationCount; i++) {
        const operationInfo = ['remove', 'teste'];
        if (operationInfo[0] === 'add') {
            obj.add(operationInfo[1]);
            console.log(obj.getList());
        } else if (operationInfo[0] === 'remove') {
            obj.remove(operationInfo[1]);
            console.log(obj.getList());
        } else if (operationInfo[0] === 'getList') {
            const res = obj.getList();
            if (res.length === 0) {
                console.log('No Items\n');
            } else {
               // console.log(`${res.join(',')}\n`);
            }
        }
    }
}

main();