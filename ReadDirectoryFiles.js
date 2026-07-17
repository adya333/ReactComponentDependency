import fs from "fs";
import path from "path";

export default function readDirectoryFiles(url, files=[])
{
    try{
    const dirents = fs.readdirSync(url,{withFileTypes:true});

    const validExtensions = [".js", ".jsx", ".ts", ".tsx"];

    dirents.forEach(dirent => {
                if(dirent.isFile() && 
                  validExtensions.some(ext => dirent.name.endsWith(ext)))
                {
                   
                    files.push(dirent);
                }
                if(dirent.isDirectory())
                {
                    //console.log(`${dirent.name} -- DIRECTORY`);
                    const link = path.join(url,dirent.name);
                    readDirectoryFiles(link, files);
                }
            });
        }
    catch(err)
    {
        console.log("Not able to print faced some error");
    }
}

