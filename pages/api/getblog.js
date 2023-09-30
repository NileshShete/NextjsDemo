// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

import { error } from 'console';
import * as fs from 'fs';
export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        console.log('req', req.query.slug)
        if(err){
            res.status(500).json({error:"Internal server error"});
        }
        res.status(200).json(JSON.parse(data));
    })
}   