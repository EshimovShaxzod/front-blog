const {v4: uuidv4} = require("uuid");
const path = require("path");
const fs = require("fs");


class FileService {
    save(file){
        try{
            const fileName = uuidv4() + ".jpg";
            const currentDir = __dirname;
            const staticDir = path.join(currentDir, '..', 'static');// static file create qilyapmiz
            const filePath = path.join(staticDir, fileName);

            if(!fs.existsSync(staticDir)){
                fs.mkdirSync(staticDir, {recursive: true})
            }

            file.mv(filePath);

            return fileName

        }catch(err){
            throw new Error(err)
        }
    }
}

module.exports = new FileService()