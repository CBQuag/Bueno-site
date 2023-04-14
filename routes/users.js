const express=require('express');
const router=express.Router();
const fs=require('fs')

let USER_FILE='./data/users.json';
let USER_LISTS='./data/user-lists.json';

//get the list of users
router.get('/',(req,res)=>{    
    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
    })
})

//add a new user with a default empty list
router.post('/',(req,res)=>{

    //posts a new user to the list of users
    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const userFile=JSON.parse(data);

        const newUser={
            name:req.body.name,
            pass:req.body.pass
        };
        
        userFile.push(newUser);

        console.log(userFile);

        fs.writeFile(USER_FILE, JSON.stringify(userFile), err=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem reading the file.')
                return;
            }
            res.json(newUser);
        })
    })

    //posts a new list for the new user
    fs.readFile(USER_LISTS, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }

        const userList=JSON.parse(data);

        let newList={
            "user":req.body.name,
            "list":[]
        }

        userList.push(newList);

        console.log(newList);

        fs.writeFile(USER_LISTS, JSON.stringify(userList), err=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem reading the file.')
                return;
            }
            res.json(newList);
        })
    })
});

//change the password
router.put('/',(req,res)=>{    
    res.send()
});

//delete account and associated list
router.delete('/',(req,res)=>{    
    res.send()
});

module.exports = router;