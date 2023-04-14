const express=require('express');
const router=express.Router();
const fs=require('fs')

let USER_FILE='./data/users.json';

//get the list of users
router.get('/',(req,res)=>{    
    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        console.log(JSON.parse(data));
        res.json(JSON.parse(data));
    })
})

//get a specific user's list
router.get('/:user',(req, res)=>{
    let {user}=req.params;
    convertedUser=user.replace(/_/g, " ");

    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        let userList=JSON.parse(data);
        let currentUser=userList.find(u=>u.name.toLowerCase()==convertedUser.toLowerCase())

        res.json(currentUser);
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
            pass:req.body.pass,
            list:[]
        };
        
        userFile.push(newUser);

        fs.writeFile(USER_FILE, JSON.stringify(userFile), err=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem writing the file.')
                return;
            }
            res.json(newUser);
        })
    })
});

//adds a new entry to a user's list with a name and score
router.post('/:user', (req, res)=>{
    
    fs.readFile(USER_FILE, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        const {user}=req.params;

        const userFile=JSON.parse(data);

        convertedUser=user.replace(/_/g, " ");

        let currentUser=userFile.find(u=>u.name.toLowerCase()==convertedUser.toLowerCase())

        const newEntry={
            name:req.body.name,
            score:req.body.score
        };
        
        currentUser.list.push(newEntry);

        fs.writeFile(USER_FILE, JSON.stringify(userFile), err=>{
            if(err){
                console.error(err);
                res.status(500).send('There was a problem writing the file.')
                return;
            }
            res.json(newEntry);
        })
    })
})

//change the password
router.put('/',(req,res)=>{    
    res.send()
});

//delete account and associated list
router.delete('/',(req,res)=>{    
    res.send()
});

module.exports = router;