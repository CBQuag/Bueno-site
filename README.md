## Bueno Site

This is an API to store lists of shows for different users. It's kind of like
myanimelist, but it's not mal, it's bueno.

request methods:

`/shows` - GET
- Returns a list of all shows with information available

`/shows/:name` - GET
- Returns info for a specific show
- Example response from `/shows/Sonny_Boy`
```
    {
        "name": "Sonny Boy",
        "director": "Shingo Natsume",
        "episodes": 12,
        "season": "Summer",
        "year": 2021
    }
```

`/shows` - POST
- Given show information, adds a new show to the main list of shows


`/users` - GET
- Returns a list of users

`/users/:user` - GET
- Returns a specific user
- Example response from `/users/John_Q_Anime`
```
    {
        "name":"John Q Anime",
        "pass":"Password1",
        "list":[
            {
                "name":"Erased",
                "score":10  
            },
            {
                "name":"Redline",
                "score": 8
            }
        ]
    }
```
>Erased as a 10? Couldn't be me

`/users/:user` - POST
- Given a title and score, adds a show to a user's list