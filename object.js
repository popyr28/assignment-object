var superwoman = {
    id: "M0518044",
    name: "Superwoman",
    age: 200,
    favorites: [
        "coding",
        "reading",
        {
            sports: ["parkour", "hill climbing"]
        }
    ],
    address: {
        street: "Planet Neptun",
        zipCode: 57467
    }
}

console.log(superwoman.name)
console.log(superwoman.age)
console.log(superwoman.favorites[1])
console.log(superwoman.favorites[2].sports)
console.log(superwoman.favorites[2].sports[0])
console.log(superwoman.address)
console.log(superwoman.address.zipCode)

superwoman.name = "Katty Woman"
console.log(superwoman.name)

//add key-value pair

superwoman.child = "Iebe"
console.log(superwoman.child)