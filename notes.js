// TITLE NOTE模块， 添加/删除/读取笔记 
console.log('Starting notes.js')

const fs = require('fs')

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
        return JSON.parse(notesString)
    } catch (e) {
        return []
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    console.log('adding notes...');
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };


    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
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
    // fetch notes
    // filter notes, removing the one with the title of argument
    // save new notes array

}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
}