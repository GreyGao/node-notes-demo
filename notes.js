// TITLE NOTE模块， 添加/删除/读取笔记 
console.log('Starting notes.js')

const fs = require('fs')

var addNote = (title, body) => {
    console.log('adding notes...');
    var notes = [];
    var note = {
        title,
        body,
    };

    try {
        var notesString = fs.readFileSync('notes-data.json')
        notes = JSON.parse(notesString)
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }else{
        console.log('The note be added is already exist.')
    }
}

var getAll = () => {
    console.log('listing notes...')

}

var getNote = (title) => {
    console.log('getting notes...')

}

var removeNote = (title) => {
    console.log('removing notes...')

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}