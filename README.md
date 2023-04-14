## Bueno Site

This is an API to store lists of shows for different users. It's kind of like
myanimelist, but it's not mal, it's bueno.

request methods:

`/shows` - GET
-Returns a list of all shows with information available

`/shows/:name` - GET
-Returns info for a specific show


`/users` - GET
-Returns a list of users

`/users/:user` - GET
-Returns a specific user

`/users/:user` - POST
-Given a title and score, adds a show to a user's list