var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.itens = [
        {produto: 'Xbox One', quantidade: 1, comprado: false},
        {produto: 'Jogos', quantidade: 8, comprado: false}
    ];

    $scope.getTotalitens = function () {
        return $scope.itens.length;
    };

    $scope.adicionaItem = function () {

        if($scope.item.produto == ''){
            alert('Preencha o Produto!');
        }
        else {
            $scope.itens.push({produto: $scope.item.produto,
                quantidade: $scope.item.quantidade,
                comprado: false}
            );
        }
        $scope.item.produto = $scope.item.quantidade = '';
    };
});

