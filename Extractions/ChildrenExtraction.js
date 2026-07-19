import traverse from "@babel/traverse";
import componentExtraction from "./ComponentsExtraction.js";

const components = componentExtraction();
function recursiveExplore(node)
{
   if (!node.children) return;

    node.children.forEach(child => {
        if (child.type === "JSXElement") {
            const tagName = child.openingElement.name.name;
             if (components.has(tagName)) {
                console.log(tagName, "is a child component");
            }


            recursiveExplore(child);
        }
    });
}
export default function childrenExtraction(ast)
{

    traverse(ast,{
        ReturnStatement:function(path)
        {
            const arg = path.node.argument;

            if (arg && arg.type === "JSXElement") {
                recursiveExplore(arg);
            }
        }
    });
}