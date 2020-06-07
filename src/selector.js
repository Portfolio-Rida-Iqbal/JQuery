class $ {
    constructor (selector) {
        if (selector.startsWith('.')) {
            this.elements = Array.from(document.getElementsByClassName(selector.slice(1))) //slice at 1 to get rid of the .
        } else if (selector.startsWith('#')) {
            this.elements = [document.getElementById(selector.slice(1))]
        } else {
            this.elements = Array.from(document.getElementsByTagName(selector))
        }
    }

    hide () {
        this.elements.forEach(element => {
            element.style.display = 'none'
        })
        return this
    }

    show () {
        this.elements.forEach(element => {
            element.style.display = 'inherit'
        })
        return this
    }

    addClassName (classAdd) {
        this.elements.forEach(element => {
            element.classList.add(classAdd)
        })
        return this
    }

    removeClassName (classDelete) {
        this.elements.forEach(element => {
            element.classList.remove(classDelete)
        })
        return this
    }

    text (str) {
        this.elements.forEach(element => {
            element.innerText = str
        })
        return this
    }

    addChild (newChild) {
        this.elements.forEach(element => {
            const createdChild = document.createElement(newChild)
            element.appendChild(createdChild)
        })
        return this
    }
}
