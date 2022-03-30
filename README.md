# Dictionary Test

#### Purpose
The purpose of this repo is to test your ability to learn new things and think independently about how to solve problems given to you.

#### Goal
By the end of the test you will have created a very basic dictionary tool.  The following should be features of the tool you will build:
- Add/edit words to the dictionary
- Add/edit many definitions for each word
- Should be able to browse the words in the dictionary with their definitions
- You should be able to search the dictionary
- As a bonus to this test, add any additional features you think would add value to this project (be creative)

#### Rules
- you should not install any additional PHP libraries or frameworks to complete this project
- you should not install any additional javascript libraries or frameworks to complete this project
- You may add a CSS framework if you desire (or write your own CSS)
- Your code should be your own

#### Getting Started
You should already have a code environment given to you with the basis for the project all setup (the purpose of this test is not to test your ability to setup a new project)

Your project will have the obray framework already installed as well as a very, very basic javascript framework for adding HTML elements to a page.

Using this very basic setup your goal is to create a basic dictionary.  As a template to how this should work look at this wireframe:

## Dictionary
Add Word (button)
| Word  | Definition | Actions |
| ------------- | ------------- | ------------- |
| li·ai·son  | 1. communication or cooperation which facilitates a close working relationship between people or organizations. | Edit / Delete |
|  | 2. the binding or thickening agent of a sauce, often based on egg yolks. | Edit / Delete |
| bind·ing  | 1. a strong covering holding the pages of a book together.  | Edit / Delete |
| | 2. a mechanical device fixed to a ski to grip a ski boot, especially either of a pair used for downhill skiing which hold the toe and heel of the boot and release it automatically in a fall. | Edit / Delete |

# How to use the Obray Framework

Take a look at this wiki on the framwork to get you started: https://github.com/Merx-Solutions/dictionary/wiki/Obray-Framework

You will find in the repo an oExample.php model.  You can use it to script the table to the database and use it's add, update, get, and delete functions as examples on how to work with ODBO.  To do this open up the VS code terminal and do this on the command line:
```
php obray.php "/m/oExamples/scriptTable/"
```
The above command will use the models table definition to create a table in the database.  To add data to the table you can use the following command:
```
php obray.php "/m/oExamples/add/?oexample_name=blah&oexample_value=10"
```
That should add a single row to the oExamples table.  Try doing update and delete to get the hang of it.   The ODBO documentation should give you an idea how to call these routes from code.
# How to use the Javascript Framework

The JS framework can hardly be described as a framework, but rather a really simple way to create HTML elements and components to be put on the page.  To use the HTML class included you woud do the following:
``` javascript
new HTML('div','text node content', {id: 'example', class: 'example'}).append(document.body)
```
Let's disect the above to see what's going on.  The first parameters is the HTML element you are creating, in this case a `div` tag.

The second parameter will be set to the innerHTML property of the element you are creating.  This means you can also put HTML directly into the above like this: `<h1>text node content</h1>` and that would be completely valid.

The third parameter is the attributes object.  Anything you put in this object will be added as an attribute to the HTML element you are creating.  Any attribute is valid and you can even add events this why like this:
``` javascript
new HTML('button','click me', {onclick: function(){ console.log('hello world'); }})
```
You can ommit both the second and third parameters so the follow instantiations are valid:
``` javascript
new HTML('div', '<h1>Hello World</h1>').append(document.body) // creates a div with an H1 element inside that says 'Hello World' and append the the body
new HTML('div', {class: 'my-div'}).append(document.body) // creates a div with the class attribute set to 'my-div'
new HTML('div').append(document.body) // create a div with nothing in it and no attributes
```

### Creating Components
You can create your own HTML components by extending the HTML class like this:
``` javascript
class MyTableComponent extends HTML
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
```
To use our new component we would do so like this:
``` javascript
var table = new MyTableComponent(['header-1', 'header-2', 'header-3']).append(document.body)
table.addRow(['row1-data1', 'row1-data2', 'row1-data3'])
table.addRow(['row2-data1', 'row2-data2', 'row2-data3'])
table.addRow(['row3-data1', 'row3-data2', 'row3-data3'])
```
This should create a table that looks like the following:
| header-1 | header-2 | header-3 |
| ---------- | ---------- | ---------- |
| row1-data1 | row1-data2 | row1-data3 |
| row2-data1 | row2-data2 | row2-data3 |
| row3-data1 | row3-data2 | row3-data3 |

There is an example of how this table component works in the repo, so give it a test and make sure you understand how it works.

At some point you will also need to make requests to the server to add words or definitions, delete them, etc.  To do this use the javascript fetch API.  You can find documentation for it here: [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
