import React from 'react'
import { useState } from 'react'

const StonePaperScissorsGame = () => {

    const [computerChoice, setComputerChoice] = useState("")
    const [message, setMessage] = useState("")

    const handleComputerChoice = () => {
        const choice = ["paper", "stone", "scissors"];
        const randomNumber = Math.floor(Math.random() * 3);
        // console.log(randomNumber)
        return (
           choice[randomNumber]
        )
    }

    const handleGame = (name) => {
      const compchoice =  handleComputerChoice()
      setComputerChoice(compchoice)
        console.log(compchoice)
        if (name === compchoice) {
            setMessage("Game is Draw")
        }
        else if (name === "paper" && compchoice=== "scissors") {
            setMessage("computer Win the game")
        }
        else if (name === "paper" && compchoice === "stone") {
            setMessage("user Win the game")
        }


        else if (name === "stone" && compchoice=== "scissors") {
            setMessage("user wins the game")
        }
        else if (name === "stone" && compchoice=== "paper") {
            setMessage("computer wins the game")
        }

        else if (name === "scissors" && compchoice === "stone") {
            setMessage("computer wins the game")
        }
        else if (name === "scissors" && compchoice === "paper") {
            setMessage("User win the game")
        }



    }

    return (
        <div>
            <h1 className='font-bold'>Stone Paper Scissors</h1>
            <div className='mt-10'>
                <button
                    className='bg-red-700 p-2 mr-2'
                    onClick={() => handleGame("stone")}
                >Stone</button>
                <button
                    className='bg-red-700 p-2 mr-2'
                    onClick={() => handleGame("paper")}
                >Paper</button>
                <button
                    className='bg-red-700 p-2'
                    onClick={() => handleGame("scissors")}
                >Scissors</button>
            </div>
            <h1>{message}</h1>
            <h2>{computerChoice}</h2>
        </div>
    )
}

export default StonePaperScissorsGame
