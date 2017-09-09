var createViewModel = require('./horizontal-model').createViewModel;

exports.onNavigatingTo = function(args){
    var page = args.object;
    page.bindingContext = createViewModel();
}