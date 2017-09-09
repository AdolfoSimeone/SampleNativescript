var Observable = require("data/observable").Observable;
var Toast = require('nativescript-toast');

exports.createViewModel = function(){
    var viewModel = new Observable();
    viewModel.isChecked = false;
    viewModel.items = [
        {
            id: 1,
            name: 'Bruce Wayne',
            alias: 'Batman'
        },
        {
            id: 2,
            name: 'Peter Parker',
            alias: 'Spiderman'
        },
        {
            id: 3,
            name: 'Clark Kent',
            alias: 'Superman'
        }
    ];
    viewModel.names = [];
    for (var i in viewModel.items){
        viewModel.names.push(viewModel.items[i].name);
    }
    viewModel.index = 0;
    viewModel.smallText = "";
    viewModel.largeText = "";

    viewModel.submit = function(){
        var model = this;
        if (model.smallText.trim() == ""){
            Toast.makeText("Please enter some text in the text field").show();
            return;
        }
        if (model.largeText.trim() == ""){
            Toast.makeText("Please enter some text in the text view").show();
            return;
        }
        if (!model.isChecked){
            Toast.makeText("Please select the checkbox").show();
            return;
        }

        Toast.makeText("Form validated successfully").show();
    }

    return viewModel;
}