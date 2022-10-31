const gulp = require('gulp')
const { series, parallel } = require('gulp')
//const series = gulp.series

//criando parametros com funçoes arrow
const antes1 = cb => {
    console.log('Tarefa Copiando')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa em Processo')
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //pipe serve para trasformar o arquivo
    .pipe(gulp.dest('pastaB'))
    return cb()
}
const fim = cb => {
    console.log('Tarefa Finalizada')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,    
)
