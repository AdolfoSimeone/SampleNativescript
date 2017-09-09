var Observable = require("data/observable").Observable;
var frameModule = require('ui/frame');

function createViewModel() {
    var viewModel = new Observable();
    

    viewModel.inputSample = function() {
        frameModule.topmost().navigate({
            moduleName: 'inputs/page'
        });
    }

    viewModel.verticalListSample = function(){
        frameModule.topmost().navigate({
            moduleName: 'lists/vertical'
        });
    }

    viewModel.horizontalListSample = function(){
        frameModule.topmost().navigate({
            moduleName: 'lists/horizontal'
        });
    }

    return viewModel;
}

exports.createViewModel = createViewModel;