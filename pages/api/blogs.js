import * as fs from 'fs';
export default async function handler(req, res) {

    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        try {
            let myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
            let parsedData = JSON.parse(myfile);
            allBlogs.push(parsedData);
        } catch (error) {
            console.error('Error parsing JSON file ' + item + ':', error);
        }
    }
    res.status(200).json(allBlogs)
}