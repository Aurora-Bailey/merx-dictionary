export class HTML
{
    constructor(el, ...parameters)
    {
        if(el == null) return this
        this.el = document.createElement(el);
        for (const key in parameters) {
            
            switch(typeof parameters[key]) {
                case 'object':
                    for (const property in parameters[key]) {
                        if(typeof parameters[key][property] == 'function'){
                            if(this.el.attachEvent){
                                form.attachEvent(property, parameters[key][property]);
                            } else {
                                this.el.addEventListener(property, parameters[key][property]);
                            }
                        } else {
                            this.el.setAttribute(property, parameters[key][property]);
                        }
                    }
                    break;
                case 'string':
                    this.el.innerHTML = parameters[key]
                    //this.text = document.createTextNode()
                    //this.el.appendChild(this.text)
                    break;
            }
        }
    }

    html(html)
    {
        this.el.innerHTML = html
    }

    getEl()
    {
        return this.el;
    }

    append(el)
    {
        if(el.appendChild != undefined){
            el.appendChild(this.el)
        } else if(el.getEl != undefined){
            el.getEl().appendChild(this.el)
        }
        return this
    }
}
