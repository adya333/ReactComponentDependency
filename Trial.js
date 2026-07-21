import url from "./config.js";
import readDirectoryFiles from "./Traversal/ReadDirectoryFiles.js";
import astGeneration from "./Parser/AstGeneration.js";
import exportsExtraction from "./Extractions/ExportsExtraction.js";
import componentExtraction from "./Extractions/ComponentsExtraction.js";
import stateExtraction from "./Extractions/StatesExtraction.js";
import childrenExtraction from "./Extractions/ChildrenExtraction.js";
import functionExtraction from "./Extractions/FunctionExtraction.js";
import importsExtraction from "./Extractions/ImportsExtraction.js";




// Read all the components
const components = componentExtraction();


components.forEach((component)=>{
    console.log(component.name);
    const exs = exportsExtraction(component.ast);
    console.log(exs);

    const imports = importsExtraction(component.ast);
    console.log(imports);
});

