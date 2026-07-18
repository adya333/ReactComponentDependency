import readDirectoryFiles from "../Traversal/ReadDirectoryFiles.js";
import * as babelParser from "@babel/parser";
import fs from "fs";
import path from "path";
import url from "../config.js";

// This is taking a dirent file object as input
export default function astGeneration(file)
{
  const link = path.join(file.parentPath, file.name);
   const code1 = fs.readFileSync(link, 'utf-8');
   const ast = babelParser.parse(code1, {
                sourceType: 'module', 
                plugins: [
                  'jsx',          
                  'typescript'    
                ]
              });
  return ast;
}

// parsingFile(url);
