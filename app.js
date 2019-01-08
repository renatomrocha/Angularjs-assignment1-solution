(function(){


angular.module('App1', [])
.controller('App1Controller', AppController);

AppController.$inject = ['$scope'];

function AppController($scope){
    $scope.msg = "";

    $scope.CheckList = function(){
        var list = $scope.list;
        if (list === undefined){
            $scope.msg= "Please enter data first";
            $scope.myStyle = {color: 'red'};
            $scope.boxStyle = {border: 'solid 2px red'};
        }
        else{
        var items = list.split(','); 
        console.log( items);
        function CheckN(it){
            n = 0
            for(item in it){
                if(/\S/.test(it[item])){
                    n+=1;
                }
            }
            return n;
        }
        var nn = CheckN(items);
        console.log(n);
        
        if(nn<=3 && nn>0){
            
            $scope.msg = "Enjoy!!";
            $scope.myStyle = {color: 'green'};
            $scope.boxStyle = {border: 'solid 2px green'};
        }
        else if(nn>3){
            
            $scope.msg = "Too much!!!";
            $scope.myStyle = {color: 'green'};
            $scope.boxStyle = {border: 'solid 2px green'};
        }
        else{
            $scope.msg = "Please enter data first";
            $scope.myStyle = {color: 'red'};
            $scope.boxStyle = {border: 'solid 2px red'};
        }
    }
    }


};





})();