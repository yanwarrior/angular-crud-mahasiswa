appMahasiswa.controller('MahasiswaController', function($scope, MahasiswaService) {
	$scope.dataMahasiswa = MahasiswaService.all();
	
	$scope.refresMahasiswa = function() {
		$scope.dataMahasiswa = MahasiswaService.all();
	}

	$scope.saveMahasiswa = function() {
		console.log($scope.newMahasiswa);
		MahasiswaService.save($scope.newMahasiswa);
		$scope.newMahasiswa = {};
		$('#myModal').modal('hide');
	}

	$scope.deleteMahasiswa = function(id) {
		MahasiswaService.delete(id);
		if ($scope.newMahasiswa.id == id) { $scope.newMahasiswa = {}; }
		$scope.refresMahasiswa();
	}

	$scope.editMahasiswa = function(id) {
		$scope.newMahasiswa = angular.copy(MahasiswaService.get(id));
		$('#myModal').modal('show');
	}

	$scope.clearMahasiswa = function() {
		$scope.newMahasiswa = {};
	}



});