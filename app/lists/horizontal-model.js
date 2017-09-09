var Observable = require("data/observable").Observable;

exports.createViewModel = function(){
    var viewModel = new Observable();
    viewModel.items = [];
    for (var i=0; i<10; i++){
        viewModel.items.push({
            name: "Item " + (i+1),
            description: "Description item " + (i+1)
        });
    }
    return viewModel;
}