mahasiswaModule.controller('MahasiswaController', function(MahasiswaModel, MahasiswaHelper) {
	var main = this; // same as $scope
	main.mahasiswas = MahasiswaModel.getMahasiswas();

	main.createMahasiswa = function() {
		main.mahasiswas.push({
			uid: MahasiswaHelper.buildUid(main.mahasiswas),
			'nim': '1111XXXXXXX',
			'name': 'Mahasiswa Name',
			'email': 'example@mail.com',
			'note': 'Though, you might want to consider doing this server-side if possible: it will be cleaner and work for people without JS.'
		})
	}
	
	main.setCurrentMahasiswa = function(mahasiswa) {
		main.currentMahasiswa = mahasiswa;
	}

	main.removeMahasiswa = function(mahasiswa) {
		main.currentMahasiswa = mahasiswa;
		// get index object mahasiswa dari service factory
		index = MahasiswaHelper.getIndexFromObject(main.currentMahasiswa, main.mahasiswas)
		console.log(index);
		main.mahasiswas.splice(index, 1);
		main.currentMahasiswa = {};
	}

});