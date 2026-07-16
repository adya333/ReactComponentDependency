
import traverse from "@babel/traverse";
import  parsingFile  from "./ParsingFile.js";
import  url  from "./config.js";


const ast = parsingFile(url);


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
