(function () {
    'use strict';
    
    angular.module('assign2App', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var tbCtrl = this;
        tbCtrl.items = ShoppingListCheckOffService.getToBuyItems();
        
        tbCtrl.checkOff = function(index) {
            ShoppingListCheckOffService.checkOff(index);
        }
    }
    
    AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var abCtrl = this;
        abCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var boughtItems = [];
        var toBuyItems = [
            {name: "cookies", quantity: 10},
            {name: "chips", quantity: 10},
            {name: "coke", quantity: 10},
            {name: "cread", quantity: 1},
            {name: "cheeze", quantity: 1},
            {name: "candies", quantity: 10}
        ];
    
        service.getToBuyItems = function () {
            return toBuyItems;  
        };
        
        service.getBoughtItems = function () {
            return boughtItems;
        };
        
        service.checkOff = function (index) {
            boughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);
        };
    }
    
})();