var pesertaCodingClass = [
    {
        nama: "Popy",
        background: "Informatika",
        gender: "Perempuan",
        hobi: ["bersepeda", "membaca buku"],
        photo: "https://miro.medium.com/max/2400/1*SXw64_zOcmJFBXy553PNkg.jpeg"
    }, {
        nama: "Bella",
        background: "Informatika",
        gender: "Perempuan",
        hobi: ["bermain musik", "travelling"],
        photo: "https://pbs.twimg.com/media/D5XHYu9UEAEzi4F?format=jpg&name=large"
    }, {
        nama: "Dhimas",
        background: "Informatika",
        gender: "Laki-laki",
        hobi: ["gym", "travelling"],
        photo: "https://media-exp1.licdn.com/dms/image/C5603AQF3fjnUbrBhgA/profile-displayphoto-shrink_200_200/0/1613188891395?e=2147483647&v=beta&t=OvR82Bd8NlQ0ZQ0enrzQ8JMzEA02XOzVtQV-HLSVptw"
    }, {
        nama: "Rijal",
        background: "Teknik Informatika",
        gender: "Laki-laki",
        hobi: ["Menjadi kompor", "mengunjungi jombang"],
        photo: "https://i1.rgstatic.net/ii/profile.image/958152983973889-1605452881729_Q512/Achmad-Rizal-4.jpg"
    }, {
        nama: "Akri",
        background: "Teknik Informatika",
        gender: "Laki-laki",
        hobi: ["Cosplay dosen", "riding"],
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Fachri_Albar_at_Ini_Talk_Show.jpg/220px-Fachri_Albar_at_Ini_Talk_Show.jpg"
    }
]

for(i = 1; i < pesertaCodingClass.length+1; i++){
    
}
i = 1
temp = 0
pesertaCodingClass.forEach((item) => {
    // if (i == 1 || i % 3 == 1){
    //     $('#container').append(`<div class="row">`)
    //     temp = i
    // }
    $(`#rower`).append(`
    <div class="col-4 d-flex justify-content-center">
        <div class="card p-3 mt-3" style="width=100%">
            <img class="card-img-top rounded-circle mx-auto d-block" src=${item.photo} alt="Card image" style="width: 200px; height: 200px;">
            <div class="card-body">
                <h4 class="card-title text-center">${item.nama}</h4>
                <span class="card-text">Jenis Kelamin: </span>
                <span class="card-text">${item.gender}</span>
                <p class="card-text">${item.background}</p>
                <p class="card-text">${item.hobi}</p>
            </div>
        </div>
    </div>
    `)
    // i++
})


