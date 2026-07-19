import traverse from "@babel/traverse";

export default function functionExtraction(ast, componentName)
{
    traverse(ast, {
        FunctionDeclaration:(path)=>
        {
            if(path.node.id?.name === componentName)
            {
                const bodies = path.node.body.body;
                bodies.forEach(b => {
                    if(b.type === "FunctionDeclaration")
                   {   console.log("Name of the Function:");
                       console.log(b.id.name);

                       console.log("Async Status: ", b.async);
                       console.log("Parameters");
                       b.params.forEach((param)=>{
                        console.log(param.name);
                       })
                       
                   }
                });
            }
        }
    });
}