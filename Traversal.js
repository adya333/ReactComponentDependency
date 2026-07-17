
import traverse from "@babel/traverse";
import  astGeneration  from "./AstGeneration.js";
import  url  from "./config.js";


const ast = astGeneration(url);


export default function importsTraversal()
{
   
   
   traverse(ast, {
  ImportDeclaration: function(path) {
    path.node.specifiers.forEach((specifier)=>{
        console.log(specifier.local.name);
    })
    
  },
});

}

importsTraversal();
