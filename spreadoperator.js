function copiarObjeto (objeto) {
    return {...objeto}
}

console.log(copiarObjeto ({ a: 1, b: 6 }))