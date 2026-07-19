import url from "./config.js";
import readDirectoryFiles from "./Traversal/ReadDirectoryFiles.js";
import astGeneration from "./Parser/AstGeneration.js";
import exportsExtraction from "./Extractions/ExportsExtraction.js";
import componentExtraction from "./Extractions/ComponentsExtraction.js";
import stateExtraction from "./Extractions/StatesExtraction.js";
import childrenExtraction from "./Extractions/ChildrenExtraction.js";


let files = [];
readDirectoryFiles(url, files);
// files.forEach((d,index)=>{
//     console.log(index, d.name);
// })

console.log(files[7].name);

const ast = astGeneration(files[7]);
exportsExtraction(ast);

console.log("States Extraction:")
stateExtraction(ast);


console.log("Child JSXs of the component");
childrenExtraction(ast);