class ComponentNode{
    constructor(name, filePath)
    {
        this.name=name;
        this.filePath=filePath;

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
}