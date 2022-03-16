const valor = 'Global'

function minhaFncao () {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFncao()

}

exec()
