module.exports = {
    generateFrontend: () => `
        require("good-jsx")
        let originalHead = document.head
        // add a setter to document.head
        Object.defineProperty(document,"head", { 
            set: (element) => {
                document.head.add(...element.childNodes)
            },
            get: ()=>originalHead
        })
    `
}