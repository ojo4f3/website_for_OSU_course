import React from 'react';
import BoardGame from './BoardGame';

// Creates a table of the board game collection
function BoardGameList({ games, onDelete, onEdit }) {
    return (
        <table id="games">
            <caption>Board Game Collection</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Number of Plays</th>
                    <th>Last Played</th>
                    <th>Play Again?</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, n) => 
                    <BoardGame
                        game={game}
                        key={n}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default BoardGameList;
