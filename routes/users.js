const express=require('express');
const router=express.Router();
const fs=require('fs')

let USER_FILE='./data/users.json';
// let USER_LISTS='./data/user-lists.json';

router.get('/',(req,res)=>{    
    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
});

router.post('/',(req,res)=>{  
    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const userList=JSON.parse(data);

        const newUser={
            name:req.body.name,
            pass:req.body.pass
        };
        
        userList.push(newUser);

        console.log(userList);

        fs.writeFile(USER_FILE, JSON.stringify(userList), err=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem reading the file.')
                return;
            }
            res.json(newUser);
        })

        //post a new list here

    })
    res.send()
});

router.put('/',(req,res)=>{    
    res.send()
});

router.delete('/',(req,res)=>{    
    res.send()
});

module.exports = router;