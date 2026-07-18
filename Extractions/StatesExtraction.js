import traverse from "@babel/traverse";

export default function stateExtraction(ast)
{
   traverse(ast, {
    VariableDeclaration:function(path)
    {
        const decla = path.node.declarations;
        decla.forEach((d)=>{
            if(d.init.callee && d.init.callee.name === "useState")
            {
                console.log(d.id.elements[0].name, d.id.elements[1].name);
            }
        });
        
       
    }
   });
}