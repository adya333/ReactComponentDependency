import traverse from "@babel/traverse";


export default function exportsExtraction(ast)
{
    let exs = new Set();
    traverse(ast, {
        ExportDefaultDeclaration:function(path)
        {
            let type = path.node.declaration.type;
            if(type === "Identifier")
                exs.add({type:type, name:path.node.declaration.name});
            if(type === "FunctionDeclaration")
                exs.add({type:type, name:path.node.declaration.id.name});
        }
    });

    return exs;
}

