var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'https://i0.hippopx.com/photos/172/951/692/puppy-pug-cute-puppy-cute-preview.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'https://asset.kompas.com/crops/JrBbHJeao90eEK5ozs-hw9ewZTs=/192x128:1728x1152/750x500/data/photo/2021/06/25/60d601f2613b0.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'https://i.pinimg.com/236x/37/e8/7b/37e87b7701414142ef6c1a115e928dd7.jpg'
}]

// let arr = document.getElementById("list")

them_dogs.forEach((item) => {
    let li = document.createElement("li")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    li1.innerText = item.name
    li2.innerHTML = `<img src=${item.picture} alt="gambar anjing"/>`
    list.appendChild(li)
    li.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)

})