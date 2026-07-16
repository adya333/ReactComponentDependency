import readDirectoryFiles from "./ReadDirectoryFiles.js";
import * as babelParser from "@babel/parser";
import fs from "fs";
import path from "path";
import url from "./config.js";



export default function parsingFile(url)
{
   let allFiles = [];
   readDirectoryFiles(url,allFiles);

  //  allFiles.forEach((file, index) => {
  //     console.log(index, file);
  //  });

   const link = path.join(allFiles[11].parentPath, allFiles[11].name);
   const code1 = fs.readFileSync(link, 'utf-8');
   const ast = babelParser.parse(code1, {
  sourceType: 'module', // Use 'module' for ES Modules (import/export) or 'script' for CommonJS
  plugins: [
    'jsx',          // Enable React JSX parsing if needed
    'typescript'    // Enable TypeScript parsing if needed
  ]
});

return ast;
//console.log(JSON.stringify(ast, null, 2));

}
// parsingFile(url);
