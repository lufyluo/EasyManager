app.config(function ($stateProvider, $urlRouterProvider) {

    //  $urlRouterProvider.when("", "/listDefault");

    $stateProvider
        .state("index", {
            url: "/index",
            templateUrl: "../views/index.html",
            controller: 'indexControl'
        })
        // .state("listNormal", {
        //     url: "/listNormal",
        //     templateUrl: "../views/list-normal.html",
        //     controller: 'listNormalControl'
        // })
        // .state("upload", {
        //     url: "/upload",
        //     templateUrl: "../views/upload.html",
        //     controller: 'uploadControl'
        // })

});