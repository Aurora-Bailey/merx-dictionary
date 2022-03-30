import { HTML} from './HTML.js'
import { Example } from './components/Example.js'

class App
{
    constructor(body)
    {
        let appContainer = new HTML('div', {id: 'app'}).append(body)
        let exampleComponent = new Example().append(appContainer);
    }
}

new App(document.body)