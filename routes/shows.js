const express=require('express');
const router=express.Router();
const fs=require('fs');

const SHOWS_FILE='./data/shows.json'

router.get('/',(req,res)=>{  
    fs.readFile(SHOWS_FILE, 'utf8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
    })
});

module.exports = router;