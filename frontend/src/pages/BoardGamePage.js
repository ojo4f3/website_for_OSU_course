import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiMeeple, GiRollingDices, GiMedicalPack } from 'react-icons/gi';

import BoardGameList from '../components/BoardGameList';

// Page function
function BoardGamePage({ setBoardGame }) {
    const redirect = useNavigate();

    // useState to get a hold of data
    const [games, setGames] = useState([])

    // Retrieve the board game collection
    const loadGames = async () => {
        const response = await fetch('/boardgames');
        const games = await response.json();
        setGames(games);
    } 

    // Update a single board game entry
    const onEditGame = async game => {
        setBoardGame(game);
        redirect("/edit");
    }

    // Delete a single board game entry
    const onDeleteGame = async _id => {
        const response = await fetch(`/boardgames/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/boardgames');
            const games = await getResponse.json();
            setGames(games);
        } else {
            console.error(`Failed to delete the board game with _id = ${_id}, status code = ${response.status}`)
        }
    }
    
    // load all board games in the collection
    useEffect(() => {
        loadGames();
    }, []);

    // Display the collection
    return (
        <>
            <article>
                <h2><GiMeeple />  Board Game Collection and Play Log  <GiRollingDices/></h2>
                <p>Use this page to add board games, log plays, and rate games.</p>
                <p>Click <GiMedicalPack onClick={() => redirect('/create')} /> to add a new board game.</p>
                <BoardGameList games={games} onEdit={onEditGame} onDelete = {onDeleteGame} />
            </article>
        </>
    );
}

export default BoardGamePage;
