import traverse from "@babel/traverse";

export default function exportsExtraction(ast)
{
    traverse(ast, {
        ExportDefaultDeclaration:function(path)
        {
            let type = path.node.declaration.type;
            if(type === "Identifier")
                console.log(type, path.node.declaration.name);
            if(type === "FunctionDeclaration")
                console.log(type, path.node.declaration.id.name);
        }
    });
}

