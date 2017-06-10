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
		main.mahasiswas.pop(main.currentMahasiswa);
		main.currentMahasiswa = {};
	}

});