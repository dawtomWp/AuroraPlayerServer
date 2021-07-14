
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.post('/refresh', (req,res) => {
    const refreshToken = req.body.refreshToken;


    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c36d86cf60394581b15294dcb6863de9',
        clientSecret:'f291eb353b514a4bb639fac2da694f1b',
        refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        })
        console.log(data.body)
    })
    .catch(err => {
        console.log("co jest")
        res.sendStatus(400)
    })
    
})




app.post('/login', (req,res) => {

    const code = req.body.code
 

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c36d86cf60394581b15294dcb6863de9',
        clientSecret:'f291eb353b514a4bb639fac2da694f1b',

    })
  

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        console.log(data)
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
            user_id: data.body.user
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
    })




    
})

app.get('/lyrics',async (req,res) => {
    const lyrics =
     (await lyricsFinder(req.query.artist, req.query.track)) || "No lyrics found"
     res.json({lyrics})
})




app.listen(3001)