import { HTML } from "../HTML.js"

export class Dictionary extends HTML {
    constructor() {
        super('div')
        this.words = {}
        //this.words = {'apple': {
        //     word_text: 'apple',
        //     word_id: 1,
        //     def_list: [
        //         {def_id: 1, def_text:'fruit'},
        //         {def_id: 1, def_text:'fruit'}
        //     ]
        // }}
    }

    async addWord (name) {
        let response = await fetch(`https://dictionary.aurora.merxsolutions.com/AddWord?word_text=${name}`)
        let json = await response.json()
        return json
    }

    async addDefinition (id, definition) {
        let response = await fetch(`https://dictionary.aurora.merxsolutions.com/AddDefinition?word_id=${id}&def_text=${definition}`)
        let json = await response.json()
        return json
    }

    async updateWord (id, name) {
        let response = await fetch(`https://dictionary.aurora.merxsolutions.com/UpdateWord?word_id=${id}&word_text=${name}`)
        let json = await response.json()
        return json
    }

    async updateDefinition (id, definition) {
        let response = await fetch(`https://dictionary.aurora.merxsolutions.com/UpdateDefinition?def_id=${id}&def_text=${definition}`)
        let json = await response.json()
        return json
    }

    async removeDefinition (id) {
        let response = await fetch(`https://dictionary.aurora.merxsolutions.com/RemoveDefinition?def_id=${id}`)
        let json = await response.json()
        return json
    }

    async removeWord (id) {
        let response = await fetch(`https://dictionary.aurora.merxsolutions.com/RemoveWord?word_id=${id}`)
        let json = await response.json()
        return json
    }

    async getAllWordsWithDefinitions () {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/GetAllWordsWithDefinitions")
        let json = await response.json()

        this.words = {}
        json['data'].forEach(item => {
            let {word_text, word_id} = item["word"][0]
            let {def_text, def_id} = item
            if (typeof this.words[word_text] === 'undefined'){
                this.words[word_text] = {
                    word_text,
                    word_id,
                    def_list: [
                        {def_id , def_text}
                    ]
                }
            } else {
                this.words[word_text]['def_list'].push({def_id , def_text})
            }
        })
    }

    async render () {
        await this.getAllWordsWithDefinitions()
        this.el.innerHTML = ''
        let table = new HTML('table').append(this.el)
        let tableHeader = new HTML('tr').append(table)
        let thList = ["Word", "Definition", "Actions"]
        thList.forEach(headerData => {
            let x = new HTML('th', headerData).append(tableHeader)
        })
        for (const key in this.words) {
            let word = this.words[key]
            let row = new HTML('tr').append(table)
            let name = new HTML('td', word['word_text']).append(row)
            let def = word['def_list'].shift()
            let definition = new HTML('td', '1. ' + def['def_text']).append(row)
            let action = new HTML('td').append(row)

            let edit = new HTML('button', 'Edit', {click: () => {
                this.updateWord(word['word_id'], prompt('Update word...')).then(() => {
                    this.updateDefinition(def['def_id'], prompt('Update definition...')).then(() => this.render())
                })
            }}).append(action)

            let addDef = new HTML('button', 'Add Definition', {click: () => {
                this.addDefinition(word['word_id'], prompt('Enter another definition...')).then(response => {
                    this.render()
                })
            }}).append(action)

            let del = new HTML('button', 'Delete', {click: () => {
                this.removeWord(word['word_id']).then(() => this.render())
            }}).append(action)

            word['def_list'].forEach((def, i) => {
                let row = new HTML('tr').append(table)
                let name = new HTML('td', '').append(row)
                let definition = new HTML('td', (i + 2) + '. ' + def['def_text']).append(row)
                let action = new HTML('td').append(row)

                let edit = new HTML('button', 'Edit', {click: () => {
                    this.updateDefinition(def['def_id'], prompt('Update definition...')).then(() => this.render())
                }}).append(action)

                let del = new HTML('button', 'Delete', {click: () => {
                    this.removeDefinition(def['def_id']).then(() => this.render())
                }}).append(action)
            })
        }
        let add = new HTML('button', 'Add Word', {click: () => {
            this.addWord(prompt('Enter a new word...')).then(response => {
                this.addDefinition(response['data']['word_id'], prompt('Enter a new definition...')).then(response => {
                    this.render()
                })
            })
        }}).append(this.el)
    }
}