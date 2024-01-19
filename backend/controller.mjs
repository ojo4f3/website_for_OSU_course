// Imports
import 'dotenv/config';
import express from 'express';
import * as boardGames from './model.mjs';

// Define Port and Express App
const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// Create controller
app.post ('/boardgames', (req,res) => { 
    boardGames.createBoardGame(
        req.body.gameName,
        req.body.rating,
        req.body.timesPlayed,
        req.body.lastPlayed,
        req.body.playAgain
        )
        .then(boardGame => {
            res.status(201).json(boardGame);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Document creation failed.' });
        });
});

// Retrieve Controllers
// Retrieve controller by filter
app.get('/boardgames', (req, res) => {
    boardGames.retrieveBoardGames()
        .then(boardGame => { 
            if (boardGame !== null) {
                res.json(boardGame);
            } else {
                res.status(404).json({ Error: 'Document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Document retrieval failed.' });
        });
});


// Retrieve controller by ID
app.get('/boardgames/:id', (req, res) => {
    boardGames.retrieveBoardGameByID(req.params.id)
    .then(boardGame => { 
        if (boardGame !== null) {
            res.json(boardGame);
        } else {
            res.status(404).json({ Error: 'Document not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Document retrieval failed.' });
    });

});


// Update controller
app.put('/boardgames/:id', (req, res) => {
    boardGames.updateBoardGame(
        req.params.id, 
        req.body.gameName,
        req.body.rating,
        req.body.timesPlayed,
        req.body.lastPlayed,
        req.body.playAgain
    )
    .then(boardGame => {
        res.json(boardGame);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Document update failed.' });
    });
});


// Delete controller by ID
app.delete('/boardgames/:id', (req, res) => {
    boardGames.deleteBoardGameById(req.params.id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Document no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Document deletion failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});