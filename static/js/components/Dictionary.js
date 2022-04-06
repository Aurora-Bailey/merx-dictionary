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
        console.log(json)

    }

    async updateWord (id, name, definition) {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/UpdateWord", {
            params: {
                "word_id": id,
                "word_name": name,
                "word_definition": definition
            }
        })
        let json = await response.json()
        this.words = this.words.map(word => word.id == id ? {id, name, definition} : word)
    }

    async DeleteWord (id) {
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/RemoveWord", {
            params: {
                "word_id": id
            }
        })
        let json = await response.json()
        this.words = this.words.filter(word => word.id != id)
        
    }

    async getAllWordsWithDefinitions () {
        // {
        //     "object": "dictionary\\controllers\\cGetAllWordsWithDefinitions",
        //     "data": [
        //         {
        //             "def_id": 1,
        //             "word_id": 1,
        //             "def_text": "fruit",
        //             "OCDT": "2022-04-04 13:42:14",
        //             "OMDT": "2022-04-04 19:42:14",
        //             "OCU": 0,
        //             "OMU": null,
        //             "word": [
        //                 {
        //                     "word_id": 1,
        //                     "word_text": "apple",
        //                     "OCDT": "2022-04-02 12:02:42",
        //                     "OMDT": "2022-04-02 18:02:42",
        //                     "OCU": 0,
        //                     "OMU": null
        //                 }
        //             ]
        //         },
        //         {
        //             "def_id": 2,
        //             "word_id": 1,
        //             "def_text": "fruit",
        //             "OCDT": "2022-04-04 13:49:35",
        //             "OMDT": "2022-04-04 19:49:35",
        //             "OCU": 0,
        //             "OMU": null,
        //             "word": [
        //                 {
        //                     "word_id": 1,
        //                     "word_text": "apple",
        //                     "OCDT": "2022-04-02 12:02:42",
        //                     "OMDT": "2022-04-02 18:02:42",
        //                     "OCU": 0,
        //                     "OMU": null
        //                 }
        //             ]
        //         },
        //         {
        //             "def_id": 3,
        //             "word_id": 1,
        //             "def_text": "fruit",
        //             "OCDT": "2022-04-04 13:52:49",
        //             "OMDT": "2022-04-04 19:52:49",
        //             "OCU": 0,
        //             "OMU": null,
        //             "word": [
        //                 {
        //                     "word_id": 1,
        //                     "word_text": "apple",
        //                     "OCDT": "2022-04-02 12:02:42",
        //                     "OMDT": "2022-04-02 18:02:42",
        //                     "OCU": 0,
        //                     "OMU": null
        //                 }
        //             ]
        //         }
        //     ],
        //     "runtime": 11.221170425415039
        // }
        let response = await fetch("https://dictionary.aurora.merxsolutions.com/GetAllWordsWithDefinitions")
        let json = await response.json()

        //this.words = {'apple': {
        //     word_text: 'apple',
        //     word_id: 1,
        //     def_list: [
        //         {def_id: 1, def_text:'fruit'},
        //         {def_id: 1, def_text:'fruit'}
        //     ]
        // }}
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
            let definition = new HTML('td', word['def_list'].shift()['def_text']).append(row)
            let action = new HTML('td').append(row)
            let edit = new HTML('button', 'Edit', {click: function(){
                alert("Hello")
            }}).append(action)
            let del = new HTML('button', 'Delete', {click: function(){
                alert('Not sure why...')
            }}).append(action)

            word['def_list'].forEach(def => {
                let row = new HTML('tr').append(table)
                let name = new HTML('td', '').append(row)
                let definition = new HTML('td', def['def_text']).append(row)
                let action = new HTML('td').append(row)
                let edit = new HTML('button', 'Edit', {click: function(){
                    alert("Hello")
                }}).append(action)
                let del = new HTML('button', 'Delete', {click: function(){
                    alert('Not sure why...')
                }}).append(action)
            })
        }
        let add = new HTML('button', 'Add Word', {click: () => {
            let word = prompt('Word')
            let def = prompt('Definition')
            this.addWord (word, def).then(r => this.render)
        }}).append(this.el)
    }
}