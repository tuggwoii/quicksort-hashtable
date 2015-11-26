app.controller('AppController', function ($scope) {
	
	$scope.outputs = [];
	$scope.array = [];
	$scope.hashArray = [];
	$scope.inputs = '';
	$scope.tabs = 0;
	
	function quickSort (A, low, high) {
		if(low < high) {
			var p = partition(A, low, high);
			quickSort(A, low, p - 1);
			quickSort(A, p + 1, high);
		}
	}
	
	function partition (A, low, high) {
		var pivot = A[high];
		var i = low;
		for	(var j = low; j < high; j++) {
			if(A[j] <= pivot) {
				swap(i, j);
				i = i + 1;
			}
		}
		swap(i, high);
		return i;
	}
	
	function swap (i, j) {
		var temp = $scope.array[i];
		$scope.array[i] = $scope.array[j];
		$scope.array[j] = temp;
	}
	
	function randomInput (inputs) {
		var inputs = [];
		for(var i = 0; i < 100; i++) {
			var randomNumber = Math.floor((Math.random() * 1000) + 1);
			inputs.push(randomNumber);
		}
		return inputs.join(' ');
	}
	
	function parseIntInput (A) {
		for(var i = 0; i < A.length; i++) {
			A[i] = parseInt(A[i]);
		}
	}

	function createHashArray () {
	    $scope.hashArray = [];
	    for (var i = 0; i < 50; i++) {
	        $scope.hashArray.push({ storage: [] });
	    }
	}

	function hashTableByDivisionMethod (A) {
	    for (var i = 0; i < A.length; i++) {
	        A[i] = parseInt(A[i]);
	        if (!isNaN(A[i])) {
	            var index = A[i] % 50;
	            $scope.hashArray[index].storage.push(A[i]);
	        }
	    }
	    console.log($scope.hashArray);
	}
	
	$scope.appStart = function () {
		
	};
	
	$scope.switchTabs = function (tabs) {
		if($scope.tabs != tabs) {
			$scope.tabs = tabs;
		}
	}
	
	$scope.submit = function () {
        //QUICK SORT
		$scope.array = $scope.inputs.split(' ');
		parseIntInput($scope.array);
		quickSort($scope.array, 0, $scope.array.length - 1);
		$scope.outputString = $scope.array.join(' ');

	    //HASH TABLE
		createHashArray();
		var inputArray = $scope.inputs.split(' ');
		hashTableByDivisionMethod(inputArray);
	};
	
	$scope.random = function () {
		$scope.inputs = randomInput();
	}
	
	$scope.appStart();
	
});