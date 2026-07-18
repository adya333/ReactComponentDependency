import url from "./config.js";
import readDirectoryFiles from "./Traversal/ReadDirectoryFiles.js";
import astGeneration from "./Parser/AstGeneration.js";
import exportsExtraction from "./Extractions/ExportsExtraction.js";
import componentExtraction from "./Extractions/ComponentsExtraction.js";


let files = [];
readDirectoryFiles(url, files);
files.forEach((d,index)=>{
    console.log(index, d.name);
})

const ast = astGeneration(files[7]);
exportsExtraction(ast);