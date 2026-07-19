import traverse from "@babel/traverse";
import url from "../config.js";
import astGeneration from "../Parser/AstGeneration.js";
import readDirectoryFiles from "../Traversal/ReadDirectoryFiles.js";
import fs from "fs"
export default function componentExtraction()
{
    // Collecting all the dirent objects;
      let allFiles = [];
      readDirectoryFiles(url,allFiles);

      let components = new Set();
     allFiles.forEach((file)=>{
      
                    let ast = astGeneration(file);
                   // console.log("This is the ast for the first src file ", ast);
                    let functionName = "";
                    traverse(ast, {
                    FunctionDeclaration(path)
                    {
                        let hasJSXReturn = false;
                        path.traverse({
                            ReturnStatement(returnPath)
                            {
                                const arg = returnPath.node.argument;

                                if(arg && (arg.type === "JSXElement" || arg.type === "JSXFragment"))
                                    hasJSXReturn = true;
                            }
                        })
                        if(hasJSXReturn===true)
                        {
                            functionName = path.node.id.name;
                            components.add(functionName);
                            //console.log(functionName);
                        }
                    }
                });
     });
    

    return components;
    
}
