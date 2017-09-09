var createViewModel = require('./page-model').createViewModel;

exports.onNavigatingTo = function(args){
    var page = args.object;
    page.bindingContext = createViewModel();
}