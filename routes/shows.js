const express=require('express');
const router=express.Router();
const fs=require('fs');

const SHOWS_FILE='./data/shows.json'

let showList=fs.readFileSync(SHOWS_FILE)

router.get('/',(req,res)=>{  
    fs.readFile(SHOWS_FILE, 'utf8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        console.log('Shows')
        res.json(JSON.parse(data));
    })
});

router.get('/:name', (req, res)=>{
    console.log('Finding specific show: ')
    const {name}=req.params;
    console.log(name);
    let jsonShow=JSON.parse(showList.toString())
    currentShow=jsonShow.find(show=>show.name.toLowerCase()===name.toLowerCase());
    console.log('Current Show: ',currentShow)
    res.send(`<h1>${currentShow.name} (${currentShow.date.year})</h1>
              <a style='text-decoration:none' href='./'>Back to main</a>`)
})
module.exports = router;