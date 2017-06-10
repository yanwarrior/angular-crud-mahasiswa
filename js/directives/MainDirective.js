mahasiswaModule.directive('datamahasiswa', function() {
	tmpt = "<div><h4>{{ mahasiswa.name }}</h4><span class='label label-default'>{{ mahasiswa.nim }}</span>"
			+ " <span class='label label-success'>{{ mahasiswa.email }}</span>" 
			+ "<p>{{ mahasiswa.note }} </p> <span class=\"label label-danger\" ng-click='main.removeMahasiswa(mahasiswa)'>remove</span>"

	return {
		scope: true,
		replace: true,
		template: tmpt
	}
});
