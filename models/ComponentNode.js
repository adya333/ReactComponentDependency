class ComponentNode{
    constructor(name,fileName, filePath, ast)
    {
        this.name=name;
        this.fileName = this.fileName;
        this.filePath=filePath;

        this.ast = ast;

        // Imports
        this.imports = [];
        // Exports
        this.exports = [];

        //Props
        this.props = [];
        //states
        this.states = [];
        

        //functions
        this.functions = [];
        //event handler
        this.eventHandlers = [];

        // jsx children used
        this.jsxChildren = [];
    }

     print() {
        console.log("====================================");
        console.log(`Component : ${this.name}`);
        console.log(`Path      : ${this.filePath}`);

        console.log("Imports   :", this.imports);
        console.log("Exports   :", this.exports);
        console.log("Props     :", this.props);
        console.log("States    :", this.states);
        console.log("Functions :", this.functions);
        console.log("Handlers  :", this.eventHandlers);
        console.log("Children  :", this.jsxChildren);

        console.log("====================================\n");
    }
}
export default ComponentNode;