import traverse from "@babel/traverse";

export default function functionExtraction(ast, componentName)
{
    const funcs = [];
    traverse(ast, {
        FunctionDeclaration:(path)=>
        {
            if(path.node.id?.name === componentName)
            {
                const bodies = path.node.body.body;
                bodies.forEach(b => {
                    if(b.type === "FunctionDeclaration")
                   {   funcs.push({
                            name: b.id.name,
                            async:b.async,
                            params:b.params.map(param => param.name)
                                });
                   }
                });
            }
        }
    });

    return funcs;
}