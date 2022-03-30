import { HTML } from "../HTML.js"

export class MyTableComponent extends HTML
{
    constructor(tableHeaders)
    {
        super('table')
        this.rows = []
        var tableHeader = new HTML('tr').append(this.el) // adds new row to our table
        tableHeaders.forEach(headerData => { // loops through our tableHeaders to add our table header data
            new HTML('th', headerData).append(tableHeader) // creates our th elements and adds the to our table header row
        })
    }
    
    addRow(data)
    {
      let row = new HTML('tr').append(this.el) // creates a new tr element and appends it to this.el which is our table element create in the constructor
      data.forEach(tableData => {
          new HTML('td', tableData).append(row) // adds a new td element to our tr
      })
      this.rows[this.rows.length] = row // adds our row to our rows array
    }
}