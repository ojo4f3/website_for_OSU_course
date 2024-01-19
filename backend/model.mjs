// Imports
import mongoose from "mongoose";
import 'dotenv/config';

// Connect to game database
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const gameDB = mongoose.connection;

gameDB.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Board Game collection using Mongoose.');
    }
});

// Create board game schema
const boardGameSchema = mongoose.Schema({
    gameName:    { type: String, required: true },
    rating:      { type: Number, required: true, min:"1", max:"10" },
	timesPlayed: { type: Number, required: true, min:"0" },
    lastPlayed:  { type: Date, required: true, default: Date.now },
	playAgain:   { type: String, required: true }
});

// Compile model from the BoardGame model
const BoardGame = mongoose.model('BoardGame', boardGameSchema);

// Create model
const createBoardGame = async (gameName, rating, timesPlayed, lastPlayed, playAgain) => {
    const boardgame = new BoardGame({ 
        gameName: gameName,
        rating: rating,
        timesPlayed: timesPlayed,
        lastPlayed: lastPlayed,
        playAgain: playAgain
    });
    return boardgame.save();
}

// Retrieve Models
// Retrieve using a filter, returns a promise
const retrieveBoardGames = async () => {
    const query = BoardGame.find();
    return query.exec();
}

// Retrieve by ID
const retrieveBoardGameByID = async (id) => {
    const query = BoardGame.findById(id);
    return query.exec();
}

// Update model
const updateBoardGame = async (id, gameName, rating, timesPlayed, lastPlayed, playAgain) => {
    const result = await BoardGame.replaceOne({ _id: id }, {
        gameName: gameName,
        rating: rating,
        timesPlayed: timesPlayed,
        lastPlayed: lastPlayed,
        playAgain: playAgain
    });
    return { 
        id: id, 
        gameName: gameName,
        rating: rating,
        timesPlayed: timesPlayed,
        lastPlayed: lastPlayed,
        playAgain: playAgain
    }
}

// Delete model by ID  
const deleteBoardGameById = async (id) => {
    const result = await BoardGame.deleteOne({ _id: id});
    return result.deletedCount;
};

// Export models for use in the controller file
export { createBoardGame, retrieveBoardGames, retrieveBoardGameByID, updateBoardGame, deleteBoardGameById }
