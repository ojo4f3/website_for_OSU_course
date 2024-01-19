import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiMeeple, GiRollingDices } from 'react-icons/gi'

export const EditGamePage = ({ game }) => {

    const [gameName, setGameName]       = useState(game.gameName);
    const [rating, setRating]           = useState(game.rating);
    const [timesPlayed, setTimesPlayed] = useState(game.timesPlayed);
    const [lastPlayed, setLastPlayed]   = useState(game.lastPlayed.slice(0,10));
    const [playAgain, setPlayAgain]     = useState(game.playAgain);

    const redirect = useNavigate();

    const editBoardGame = async () => {
        const response = await fetch(`/boardgames/${game._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                gameName: gameName,
                rating: rating,
                timesPlayed: timesPlayed,
                lastPlayed: lastPlayed,
                playAgain: playAgain
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if(response.status === 200) {
            alert(`Board game updated successfully.`);
        } else {
            const errorMessage = await response.json();
            alert(`Board game not updated with status code: ${response.status}. ${errorMessage.Error}.`);
        }
        redirect("/boardgames");
    };

    return (
        <>
            <article>
            <h2><GiMeeple />  Edit a Board Game in Your Collection  <GiRollingDices/></h2>
            <p>Adjust the details below and click "Save"</p>
            <table id="games" class="boardGames">
            <caption>Edit a Board Game</caption>    
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Number of Plays</th>
                    <th>Last Played</th>
                    <th>Play Again?</th>
                    <th>Save</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label for="gameName" class="required">
                        <input
                        type="text"
                        required
                        placeholder="Board Game Name"
                        class="boardGames"
                        value={gameName}
                        onChange={e => setGameName(e.target.value)} 
                        id="gameName" /></label>
                    </td>
                    <td><label for="rating" class="required">
                        <input
                        type="number"
                        required
                        value={rating}
                        placeholder="1-10"
                        min="1"
                        max="10"
                        step="1"
                        onChange={e => setRating(e.target.value)} 
                        id="rating" /></label>
                    </td>
                    <td><label for="timesPlayed" class="required">
                        <input
                        type="number"
                        required
                        placeholder="1+"
                        min={0}
                        value={timesPlayed}
                        onChange={e => setTimesPlayed(e.target.value)} 
                        id="timesPlayed" /></label>
                    </td>
                    <td><label for="lastPlayed" class="required">
                        <input
                        type="date"
                        required
                        value={lastPlayed}
                        onChange={e => setLastPlayed(e.target.value)} 
                        id="lastPlayed" /></label>
                    </td>
                    <td><label for="playAgain" class="required">
                        <input
                        type="text"
                        required
                        placeholder="Yes / No"
                        value={playAgain}
                        onChange={e => setPlayAgain(e.target.value)} 
                        id="playAgain" /></label>
                    </td>
                    <td>
                        <button
                        class="boardGames"
                        onClick={editBoardGame}
                        id="submit">SAVE</button>
                    </td>
                </tr>
            </tbody>    
            </table>
            </article>
        </>
    );
}

export default EditGamePage;