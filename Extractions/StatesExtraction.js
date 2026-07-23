import traverse from "@babel/traverse";

export default function stateExtraction(ast)
{
    const states = [];
   traverse(ast, {
    VariableDeclaration:function(path)
    {
        const decla = path.node.declarations;
        decla.forEach((d)=>{
            if(d.init.callee && d.init.callee.name === "useState")
            {
                states.push({
                    name:d.id.elements[0].name,
                    function:d.id.elements[1].name
                });
                
            }
        });
        
       
    }
   });

   return states;
}