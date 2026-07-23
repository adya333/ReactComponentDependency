import traverse from "@babel/traverse";
import componentExtraction from "./ComponentsExtraction.js";

const components = componentExtraction();
const componentNames = new Set(
    [...components].map(c => c.name)
);
function recursiveExplore(node, children)
{
   if (!node.children) return;

    node.children.forEach(child => {
        if (child.type === "JSXElement") {
            const tagName = child.openingElement.name.name;
             if (componentNames.has(tagName)) {
               // console.log(tagName, "is a child component");
                children.push(tagName);
            }


            recursiveExplore(child, children);
        }
    });
}
export default function childrenExtraction(ast)
{
    const children = [];
    traverse(ast,{
        ReturnStatement:function(path)
        {
            const arg = path.node.argument;

            if (arg && arg.type === "JSXElement") {
                recursiveExplore(arg, children);
            }
        }
    });

    return children;
}