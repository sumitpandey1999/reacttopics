import React, { useEffect, useState } from 'react'

const TicTacToe = () => {

const [matrix, setMatrix] = useState(Array(9).fill(null))
const [turn, setTurn] = useState(true)
const [winnner, setWinner] = useState(null)

const handleClick = (e) =>{
 const position = e.target.id
  setMatrix((preValue)=>{
    const copyMatrix = [...preValue]
    copyMatrix[position] = turn?"X" : "O"
    return copyMatrix

  })
  setTurn((preValue)=>!preValue)
}


const handleReset=()=>{
    setMatrix(Array(9).fill(null))
    setTurn(true)
    setWinner(null)
}

const decideWinner= () =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

 for(let i=0; i<lines.length; i++){
  const[a,b,c] = lines[i];
  if(matrix[a]&& matrix[a]===matrix[b] && matrix[a]===matrix[c]){
    setWinner(matrix[a])
  }
 }

}

useEffect(()=>{
  decideWinner()
},[matrix])


return (
    <div>
      <h1 className='font-bold'>Tic Tac Toe</h1>
      <div className='board w-60 h-60 bg-slate-400 grid grid-cols-3'
      onClick={handleClick}
      >
      {matrix.map((arr,index)=>{
        return(
          <div
          key={index}
          id={index}
          className='box border border-red-500 flex justify-center items-center'>{arr}</div>
        )
      })}
      </div>
     <button onClick={()=>handleReset()}>Reset Game</button>
     <div>Next Turn {turn?"X":"O"}</div>
     <div>{winnner && <h1>winner is {winnner}</h1>}</div>
    </div>
  )
}

export default TicTacToe
