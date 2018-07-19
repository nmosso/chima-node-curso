const descripcion = {
    demand:true,
    alias: 'd',
    desc: 'Description de la tarea por hacer'
};
const completado = {
    default: true,
    alias : 'c',
    desc: 'Dice si esta actualizado'
}
const optCrear = {
    descripcion
};
const optAct = {
    descripcion,
    completado
};
const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',optCrear)
    .command('borrar','Elimina un elemento por hacer',optCrear)
    .command('actualizar','Imprime estado actualizado',optAct)
    .command('listar','Imprime estado actualizado',{})
    .help()
    .argv;

module.exports = {
    argv
};