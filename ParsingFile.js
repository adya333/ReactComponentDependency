const  {readDirectoryFiles} = require ("./ReadDirectoryFiles");
const babelParser = require('@babel/parser');
const fs = require('fs');
const path = require('path');


url = "../../Projects of Spring Boot/upsolverproject/upsolver-frontend/src"
function parsingFile(url)
{
   let allFiles = [];
   readDirectoryFiles(url,allFiles);

  //  allFiles.forEach(file => {
  //     console.log(file);
  //  });

   const link = path.join(allFiles[1].parentPath, allFiles[1].name);
   const code1 = fs.readFileSync(link, 'utf-8');
   const ast = babelParser.parse(code1, {
  sourceType: 'module', // Use 'module' for ES Modules (import/export) or 'script' for CommonJS
  plugins: [
    'jsx',          // Enable React JSX parsing if needed
    'typescript'    // Enable TypeScript parsing if needed
  ]
});

console.log(JSON.stringify(ast, null, 2));

}
parsingFile(url);