import { HTML} from './HTML.js'
// import { Example } from './components/Example.js'
import { MyTableComponent } from './components/Table.js'
import { Dictionary } from './components/Dictionary.js'

class App
{
    constructor(body)
    {
        let appContainer = new HTML('div', {id: 'app'}).append(body)
        
        let dictionary = new Dictionary().append(appContainer)
        dictionary.render()
        
    }
}

new App(document.body)