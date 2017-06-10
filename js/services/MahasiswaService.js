mahasiswaModule.factory('MahasiswaHelper', function() {
	var buildUid = function(mahasiswas) {
		console.log(mahasiswas);
		var uid = 0;
		if (mahasiswas.length > 0) {
			mahasiswa = mahasiswas[mahasiswas.length - 1];
			return mahasiswa.uid + 1;
		} else {
			return uid;
		}
		
	}

	var getIndexFromObject = function(mahasiswa, mahasiswas) {
		for (index in mahasiswas) {
			if (mahasiswas[index].uid == mahasiswa.uid) {
				return index;
			}
		}
	}

	return {
		buildUid: buildUid,
		getIndexFromObject: getIndexFromObject
	}
});

mahasiswaModule.service('MahasiswaModel', function() {
	var service = this;
	var uid = 0;
	var mahasiswas = [
		{
			uid: uid,
			'nim': '1111503007',
			'name': 'Yanwar Solahudin',
			'email': 'yanwarsolah@gmail.com',
			'note': 'Though, you might want to consider doing this server-side if possible: it will be cleaner and work for people without JS.'
		}
	]

	service.getMahasiswas = function() {
		return mahasiswas;
	}
});






