var frameModule = require('ui/frame');

exports.mainMenu = function(){
    frameModule.topmost().navigate({
        moduleName: 'main-page'
    });
}

exports.inputSample = function() {
    frameModule.topmost().navigate({
        moduleName: 'inputs/page'
    });
}

exports.verticalListSample = function(){
    frameModule.topmost().navigate({
        moduleName: 'lists/vertical'
    });
}

exports.horizontalListSample = function(){
    frameModule.topmost().navigate({
        moduleName: 'lists/horizontal'
    });
}

