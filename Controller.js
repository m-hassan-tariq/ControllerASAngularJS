'use strict';

(function () {
    var app = angular.module('onBoardingApp.candidate.controllers', []);

    app.controller('CandidateController', ['$scope', 'candidateService', function ($scope, candidateService) {

        var vm = this;

        // Invoke your service layer for this module
        vm.candidates = candidateService.getAllCandidates()
            .then(function (data) {
                vm.candidates = data;
            })
            .catch(function (data, status) {
                console.error('error', response.status, response.data);
            })
            .finally(function () {
                console.log("finally");
            });
    }]);
})();
