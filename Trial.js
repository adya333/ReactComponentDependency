import url from "./config.js";
import readDirectoryFiles from "./Traversal/ReadDirectoryFiles.js";
import astGeneration from "./Parser/AstGeneration.js";
import exportsExtraction from "./Extractions/ExportsExtraction.js";
import componentExtraction from "./Extractions/ComponentsExtraction.js";
import stateExtraction from "./Extractions/StatesExtraction.js";
import childrenExtraction from "./Extractions/ChildrenExtraction.js";
import functionExtraction from "./Extractions/FunctionExtraction.js";
import importsExtraction from "./Extractions/ImportsExtraction.js";
import ComponentRepository from "./models/ComponentRepository.js";

const componentRepository = new ComponentRepository();


// Read all the components
const components = componentExtraction();
components.forEach((component)=>{
   componentRepository.addComponent(component);    
});

componentRepository.getAllComponents().forEach((component)=>{
    
    component.exports = exportsExtraction(component.ast);
    

    component.imports = importsExtraction(component.ast);
    
    
    component.jsxChildren = childrenExtraction(component.ast);

    component.functions = functionExtraction(component.ast, component.name);
    
    component.states = stateExtraction(component.ast);
});

componentRepository.print();

