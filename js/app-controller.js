app.controller('AppController', function ($scope) {

    //EXAMPLE POSTFIX
    $scope.postfix = '251-*32*+';

    function isdigit(c) {
        if (c != '+' && c != '-' && c != '*' && c != '/') {
            return true;
        }
        return false;
    }

    function top(stack) {
        return stack[stack.length - 1];
    }

    function createTree(postfix, size) {
        var stack = [];
        for (i = 0; i < size; i++) {
            var char = postfix[i];
            if (isdigit(char)) {
                stack.push({ name: char });
            }
            else {
                var elm1 = top(stack);
                stack.pop();
                var elm2 = top(stack);
                stack.pop();
                var operation = {
                    name: char
                };
                operation.left = elm1;
                operation.right = elm2;
                stack.push(operation);
            }
        }
        return stack.pop();
    }


    $scope.process = function () {
        var chars = $scope.postfix.split('');
        var size = chars.length;
        var result = createTree(chars, size);

        $scope.trees = result;
    }

    $scope.clearActive = function (tree) {
        tree.active = false;
        if (tree.left) {
            $scope.clearActive(tree.left);
        }
        if (tree.right) {
            $scope.clearActive(tree.right);
        }
    }

    $scope.calculate = function (tree) {
        $scope.clearActive($scope.trees);
        tree.active = true;
        if (isdigit(tree.name)) {
            $scope.result = tree.name;
        }
    }

    $scope.expand = function (tree) {
        if (tree.expand) {
            tree.expand = false;
        }
        else {
            tree.expand = true;
        }
    }

});