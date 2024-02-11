import { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed]= useState(false);
  const yesButtonSize = noCount * 20 + 16;

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
        <img alt='bears kissing' src='https://media.tenor.com/sFStC1YwBzMAAAAi/milk-and-mocha-hug.gif'/>
        <div className='text'> Yaye!!</div>
        </>
      ) : (
        <>
        <img alt='bears with hearts' src='https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.webp' />
        <div> Will you be my Valentine? </div>
        <div>
          <button onClick={() => setYesPressed(true)} style={{fontSize: yesButtonSize}}>Yes</button>
          <button onClick={handleNoClick}>{getNoButtonText()}</button>
        </div>
        </> 
      )}

    </div>
  )
}

export default App
