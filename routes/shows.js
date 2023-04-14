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

//find a specific show
router.get('/:name', (req, res)=>{
    console.log('Finding specific show: ')

    const {name}=req.params;

    convertedName=name.replace(/_/g, " ");

    console.log(convertedName);

    let jsonShow=JSON.parse(showList.toString())
    currentShow=jsonShow.find(show=>show.name.toLowerCase()===convertedName.toLowerCase());

    console.log('Current Show: ',currentShow)

    res.send(currentShow)
})

//post a new show to the main list
router.post('/', (req, res)=>{
    fs.readFile(SHOWS_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const showsFile=JSON.parse(data);

        let newShow={
            name: res.params.name,
            director: res.params.director,
            episodes: res.params.episodes,
            date: {
                season: res.params.season,
                year:   res.params.year
            }
        }

        console.log(newShow)

        showsFile.push(newShow);

        fs.writeFile(SHOWS_FILE, JSON.stringify(showsFile), err=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem writing the file.')
                return;
            }
            res.json(newShow);
        })
    })
})

module.exports = router;