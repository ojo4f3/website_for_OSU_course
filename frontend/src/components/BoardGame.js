import React from 'react';
import { GiBroom, GiPencilBrush } from 'react-icons/gi';

// Creates a row in the BoardGameList
function BoardGame({ game, onEdit, onDelete }) {
    return (
        <tr class="game-row">
            <td>{game.gameName}</td>
            <td>{game.rating}</td>
            <td>{game.timesPlayed}</td>
            <td>{game.lastPlayed.slice(0,10)}</td>
            <td>{game.playAgain}</td>
            <td><GiBroom onClick={() => onDelete(game._id)} /></td>
            <td><GiPencilBrush onClick={() => onEdit(game)} /></td>
        </tr>
    );
}

export default BoardGame;