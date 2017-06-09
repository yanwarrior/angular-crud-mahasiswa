appMahasiswa.service('MahasiswaService', function() {
	// buat id unik
	var uid = 1;

	// data mahasiswa yang berisi sekumpulan objek.
	var dataMahasiswa = [
		{
			id: 0,
			'nim': '1111503007',
			'name': 'Yanwar Solahudin',
			'email': 'yanwarsolah@gmail.com'
		}
	];

	// buat method save untuk menambah data mahasiswa.
	// parameter `mahasiswa` adalah objek yang berisi atribut dan nilai
	// mahasiswa.
	this.save = function(mahasiswa) {
		// jika mahasiswa.id sama dengan null, 
		// maka data ditambahkan.
		if (mahasiswa.id == null) {
			dataMahasiswa.id = uid++;
			dataMahasiswa.push(mahasiswa);
		} else {
			// Jika mahasiswa.id ada, maka lakukan update.
			for (i in dataMahasiswa) {
				if (dataMahasiswa[i].id == mahasiswa.id) { dataMahasiswa[i] = mahasiswa; }
			}
		}
	}

	// buat method get untuk pencarian data mahasiswa.
	this.get = function(id) {
		for (i in dataMahasiswa) {
			if (dataMahasiswa[i].id == id) {
				return dataMahasiswa[i];
			}
		}
	}

	// buat method delete untuk menghapus data mahasiswa.
	this.delete = function(id) {
		for (i in dataMahasiswa) {
			if (dataMahasiswa[i].id == id) {
				dataMahasiswa.splice(i, 1);
			}
		}
	}

	// buat method all untuk mengambil semua data mahasiswa.
	this.all = function() {
		return dataMahasiswa;
	}
});