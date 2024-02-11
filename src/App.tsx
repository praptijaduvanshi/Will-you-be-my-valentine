import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie pleasee",
  "I'll buy you food <3",
  "and flowers...",
  "and cake...",
  "Okay... You sure?",
  "Sure sure?",
  "Sure sure sure?",
  "Sure sure sure sure?",
  "Sure sure sure sure sure?",
  "Sure sure sure sure sure sure?",
  "Sure sure sure sure sure sure sure?",
  "Change of heart yet?"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed]= useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const noButtonSize = 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  

  return (
    <div className='valentine-container'>
      { yesPressed ? (
        <>
        <img alt='love hug' style={{height:'250px'}} src='https://media.tenor.com/8DHkW1uWDHsAAAAj/milk-and-mocha.gif'/>
        <div className='text text-pink-400' style={{fontSize: 30}}> YAYEE!! 🥰🤗💐😭😚💝</div>
        </>
      ) : (
        <>
        <img className='image' style={{height:'200px'}} alt='bears with hearts' src='https://media.tenor.com/hpgCwxnBaK8AAAAi/milk-and-mocha.gif' />
        <div className='text text-color-black'> Will you be my Valentine? 🥺 </div>
        <div>
          <button className='yes-button yes-button:hover' onClick={() => setYesPressed(true)} style={{fontSize: yesButtonSize}}>Yes</button>
          <button className='no-button no-button:hover' onClick={handleNoClick} style={{fontSize: noButtonSize}}>{getNoButtonText()}</button>
        </div>
        </> 
      )}

    </div>
  )
}

export default App
