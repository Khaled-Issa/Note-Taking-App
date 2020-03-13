const chalk = require ('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true, 
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    } 
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true, 
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list your notes',
    handler(){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()
//console.log(yargs.argv)




//const fs=require('fs')
 

//fs.writeFileSync('notes.txt','This file was created by node')
//fs.appendFileSync('notes.txt','  this is an appended text')

// const add = require('./utils.js')
// const sum=add(4,-5)
// console.log(sum)

// const validator = require ('validator')
// console.log(validator.isEmail('mohamed@awad.com'))



