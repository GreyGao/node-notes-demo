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
        notes.logNote(note)
    } else {
        console.log('Note is already exist.')
    }

} else if (command === 'list') {
    var notesList = notes.getAll()
    console.log('Notes listed')
    if (notesList) {
        notesList.forEach(note => {
            notes.logNote(note)
        });
    } else {
        console.log('The notes are not found')
    }
} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log('Note found')
        notes.logNote(note)
    } else {
        console.log('Note not found')
    }

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)

} else {
    console.log('Command not recogized!')
}