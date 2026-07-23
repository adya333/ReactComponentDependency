import traverse from "@babel/traverse";
import url from "../config.js";
import astGeneration from "../Parser/AstGeneration.js";
import readDirectoryFiles from "../Traversal/ReadDirectoryFiles.js";
import fs from "fs"
import pathModule from "path";
import ComponentNode from "../models/ComponentNode.js";
export default function componentExtraction()
{
    // Collecting all the dirent objects;
      let allFiles = [];
      readDirectoryFiles(url,allFiles);

      let components = new Set();
     allFiles.forEach((file,index)=>{
                   
                    let ast = astGeneration(file);
                  
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
                            const component = new ComponentNode(
                                functionName,
                                file.name,
                                pathModule.join(file.parentPath, file.name),
                                ast
                            );
                            components.add(component);
                        }
                    }
                });
     });
    

    return components;
    
}