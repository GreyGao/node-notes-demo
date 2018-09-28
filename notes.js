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

    // filter duplicate notes
    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

var getAll = () => {
    console.log('listing notes...')
    return fetchNotes()
}

var getNote = (title) => {
    console.log('getting notes...')
    var notes = fetchNotes()
    var filterNotes = notes.filter((note) => note.title === title)
    return filterNotes[0]
}

var removeNote = (title) => {
    console.log('removing notes...')
    // fetch notes
    var notes = fetchNotes()
    // filter notes, removing the one with the title of argument
    var filterNotes = notes.filter((note) => note.title !== title)
    // save new notes array
    saveNotes(filterNotes)

    return notes.length !== filterNotes.length
}

var logNote = (note) => {
    debugger
    console.log('----')
    console.log(`Title: ${note.title}; Body: ${note.body}`)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
}