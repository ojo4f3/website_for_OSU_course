import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiMeeple, GiRollingDices } from 'react-icons/gi'

export const CreateBoardPage = () => {

    const [gameName, setGameName]       = useState('');
    const [rating, setRating]           = useState('');
    const [timesPlayed, setTimesPlayed] = useState('1');
    const [lastPlayed, setLastPlayed]   = useState();
    const [playAgain, setPlayAgain]     = useState('Yes');

    const redirect = useNavigate();

    const addBoardGame = async () => {
        const newBoardGame = { gameName, rating, timesPlayed, lastPlayed, playAgain };
        const response = await fetch('/boardgames', {
            method: 'POST',
            body: JSON.stringify(newBoardGame),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            redirect("/boardgames");
            alert(`New board game added to collection.`);
        } else {
            redirect("/boardgames");
            alert(`Board game due to missing or incorrect input. Status code: ${response.status}.`);
        }
    };

    return (
        <>
            <article>
            <h2><GiMeeple />  Add a Board Game to Your Collection  <GiRollingDices/></h2>
            <p>Enter the details below and click "Save"</p>
            <table id="games" class="boardGames">
            <caption>Add a Board Game</caption>
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
                        onClick={addBoardGame}
                        id="submit">SAVE</button>
                    </td>
                </tr>
            </tbody>    
            </table>
            </article>
        </>
    );
}

export default CreateBoardPage;