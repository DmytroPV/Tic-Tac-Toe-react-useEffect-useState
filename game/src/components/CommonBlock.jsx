import React, { useState, useEffect } from "react"

import {
    ClearButton,
    Bals,
    BalsTitle,
    WrapperBlock,
    Cell,
    ColorWin
} from './CommonBlockStyled'

const CommonBlock = () => {
    const mainArray = Array(9).fill(null)
    const [cell, setCellset] = useState(mainArray)
    const [cross_zero, setCross_zero] = useState('Х')
    const [play_game, setPlay_game] = useState(true)
    const [counterХ, setCounterХ] = useState(0)
    const [counterO, setCounterO] = useState(0)

    const clear_field = () => { // Function of clearing the field and starting the game
        setCellset(mainArray)
        setPlay_game(true)
    }

    const clickCell = (index) => {
        if (play_game) {
            const nextcellset = cell.map((c, i) => {
                if (i === index && c === null) {
                    const toggleХO = cross_zero === 'Х' ? 'O' : 'Х'
                    setCross_zero(toggleХO)
                    return c = cross_zero
                } else {
                    return c
                }
            })
            setCellset(nextcellset) // If there is no winner and the cell is not empty, add a move on click
        }
    }

    useEffect(() => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        win.forEach((j, g) => {
            const [a, b, c] = win[g]
            if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
                const color = cell.map((m, p) =>
                    p === a || p === b || p === c
                        ? m = <ColorWin>{m}</ColorWin>
                        : m
                )
                setCellset(color) // Highlight the winner in green
                let winners_move = null
                cell[a] === 'Х'
                    ? ((winners_move = 'Х') && (setCounterХ((k) => k + 1)))
                    : ((winners_move = 'O') && (setCounterO((k) => k + 1)))
                setCross_zero(winners_move) // In the next set, the first move is given to the winner
                return setPlay_game(false) // There is a winner, the game is over
            }
        })
    }, [cell])

    return (
        <>
            <ClearButton onClick={clear_field}>Start new game</ClearButton>
            <BalsTitle>Victory points</BalsTitle>
            <Bals key="X">X - {counterХ}</Bals>
            <Bals key="O">O - {counterO}</Bals>
            <WrapperBlock>
                {cell.map((element, i) =>
                    <Cell id={i} key={i} onClick={() => { clickCell(i) }} >
                        {element}
                    </Cell>
                )}
            </WrapperBlock>
        </>
    )
}

export default CommonBlock