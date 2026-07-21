// Given an ast this function extracts the imports mentioned in the particular file.


import traverse from "@babel/traverse";
import  astGeneration  from "../Parser/AstGeneration.js";
import  url  from "../config.js";





export default function importsExtraction(ast)
{
   
   let imports = new Set();
   traverse(ast, {
  ImportDeclaration: function(path) {
    path.node.specifiers.forEach((specifier)=>{
        imports.add(specifier.local.name);
    })
    
      },
    });

    return imports;

}


