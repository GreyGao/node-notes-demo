console.log('Starting app.js')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv
var command = process.argv[2]
// console.log('Command: ', command)
// console.log('Process', process.argv)
console.log('Yargs', argv)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note created')
        console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else {
        console.log('The note be added is already exist.')
    }

} else if (command === 'list') {
    notes.getAll()

} else if (command === 'read') {
    notes.getNote(argv.title)

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)

} else {
    console.log('Command not recogized!')
}