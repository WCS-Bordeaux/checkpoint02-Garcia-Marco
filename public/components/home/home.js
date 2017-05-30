'use strict'

angular.module('wildNoteApp')

    .component('home', {
        templateUrl: 'components/home/home.html',
        controller: Home
    })

function Home(Users) {
    const that = this;
    Users.get().$promise
        .then(function (result) {
            that.users = result.users;
        })
}

