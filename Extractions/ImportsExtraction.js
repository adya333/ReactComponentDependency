// Given an ast this function extracts the imports mentioned in the particular file.


import traverse from "@babel/traverse";
import  astGeneration  from "../AstGeneration.js";
import  url  from "../config.js";





export default function importsExtraction(ast)
{
   
   
   traverse(ast, {
  ImportDeclaration: function(path) {
    path.node.specifiers.forEach((specifier)=>{
        console.log(specifier.local.name);
    })
    
  },
});

}


