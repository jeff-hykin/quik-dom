module.exports = {
    generateFrontend: () => `
        require("good-jsx")
        // add a setter to document.head
        Object.defineProperty(document,"head", { 
            set: (element) => {
                for (let each of element.childNodes) {
                    this.add(each)
                }
            }
        })
    `
}