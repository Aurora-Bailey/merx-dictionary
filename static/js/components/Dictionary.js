import { HTML } from "../HTML.js"

export class Dictionary extends HTML {
    constructor() {
        super('div')
        this.words = []
    }

    async addWord (name, definition) {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/AddWord", {
            body: {
                "word_name": name,
                "word_definition": definition
            }
        })
        let json = await response.json()
        this.words.push({
            id: json["word_id"], 
            name: json["word_name"], 
            definition: json["word_difinition"]
        })

    }

    async updateWord (id, name, definition) {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/UpdateWord", {
            body: {
                "word_id": id,
                "word_name": name,
                "word_definition": definition
            }
        })
        let json = await response.json()
        this.words = this.words.map(word => word.id == id ? {id, name, definition} : word)
    }

    async DeleteWord (id) {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/DeleteWord", {
            body: {
                "word_id": id
            }
        })
        let json = await response.json()
        this.words = this.words.filter(word => word.id != id)
        
    }

    async getAllWords () {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/GetAllWords")
        let json = await response.json()
        this.words = json.map(row =>  {
            return {
                id: row["word_id"], 
                name: row["word_name"], 
                definition: row["word_definition"]
            }
        })
    }

    async render () {
        await this.getAllWords()
        this.el.innerHTML = ''
        let table = new HTML('table').append(this.el)
        let tableHeader = new HTML('tr').append(table)
        let thList = ["Word", "Definition", "Actions"]
        thList.forEach(headerData => {
            let x = new HTML('th', headerData).append(tableHeader)
        })
        for (const key in this.words) {
            let row = new HTML('tr').append(table)
            let name = new HTML('td', this.words[key].name).append(row)
            let description = new HTML('td', this.words[key].definition).append(row)
            let action = new HTML('td').append(row)
            let edit = new HTML('button', 'Edit', {onclick: function(){
                alert('Not working?')
            }}).append(action)
            let del = new HTML('button', 'Delete', {onclick: function(){
                alert('Not sure why...')
            }}).append(action)
            
        }
    }
}