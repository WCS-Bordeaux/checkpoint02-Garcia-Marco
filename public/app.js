'use strict'

const config = [
    "$stateProvider",
    "$urlRouterProvider",
    Config
]

angular

    .module('wildNoteApp', [
        "ui.router", "ngResource"
    ])

    .config(config)

    .factory("Users", ["$resource", function ($resource) {
        return $resource("/users");
    }])


function Config($stateProvider, $urlRouterProvider) {
    const states = [
        {
            name: "home",
            url: "/",
            component: "home"
        },
        {
            name:"questions",
            url: "/questions",
            component: "questions"
        }
    ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/')
}
