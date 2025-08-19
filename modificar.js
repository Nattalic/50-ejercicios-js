function cambiarEdad (objeto) {
    objeto.edad ++
    return objeto.edad
}

console.log(cambiarEdad({ nombre: "Ana", edad: 20 }))