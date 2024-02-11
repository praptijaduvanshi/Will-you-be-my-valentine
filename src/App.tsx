import { useEffect, useState } from 'react'
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

  const [showHey, setShowHey] = useState(true);
  const [showValentines, setShowValentines] = useState(false);
  const [showSo, setShowSo] = useState(false);

  useEffect(() => {
    const heyTimer = setTimeout(() => {
      setShowHey(false);
      setShowValentines(true);
    }, 2100);

    const valentinesTimer = setTimeout(() => {
      setShowValentines(false);
      setShowSo(true);
    }, 4900);

    const soTimer = setTimeout(() => {
      setShowSo(false);
    }, 6600);

    return () => {
      clearTimeout(heyTimer);
      clearTimeout(valentinesTimer);
      clearTimeout(soTimer);
    };
  }, []);

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  
  return (
    <div className='valentine-container items-center'>
      {showHey && 
      <div className='fade-in-out center-content zoom-in slidein'>
        <div className='text text-shadow pb-2' style={{fontSize: 50}}><strong>Hey you</strong>...</div>
        <img alt='cat happy' style={{height:'200px'}} src='https://media.tenor.com/8tgG_KyJqqwAAAAi/happy-happy-happy-happy.gif'/>
      </div>
      }
      {showValentines && (
      <div className='fade-in-out center-content zoom-in text-shadow'>
        <div className='text pb-8' style={{fontSize: 40}}><strong>Valentine's is around the corner ;)</strong></div>
        <img alt='cat sexy' style={{height:'150px'}} src='https://media.tenor.com/mtX466Hr5sYAAAAi/cat-kitty.gif'/>
      </div>
      )}
      {showSo && 
      <div className='fade-in-out center-content zoom-in text-shadow'>
        <div className='text rotate' style={{fontSize: 120}}><strong>SO..</strong></div>
        <img alt='cat blush' style={{height:'150px'}} src='https://media.tenor.com/8LW89Wyqp24AAAAj/syz-blush-syz.gif'/>
      </div>
      }
      {!showHey && !showValentines && !showSo && (
        <div>
          { yesPressed ? (
            <div className='fade-in-out center-content zoom-in'>
            <img alt='love hug' style={{height:'250px'}} src='https://media.tenor.com/8DHkW1uWDHsAAAAj/milk-and-mocha.gif'/>
            <div className='text' style={{fontSize: 40}}> <strong>YAYE!!!</strong> 🥰🤗💐😭😚💝</div>
            </div>
          ) : (
            <div className='center-content zoom-in'>
            <img className='zoom-in' style={{height:'200px'}} alt='bears with hearts' src='https://media.tenor.com/hpgCwxnBaK8AAAAi/milk-and-mocha.gif' />
            <div className='text text-color-black' style={{fontSize: 40}}> Will you be my <strong>Valentine?</strong> 🥺</div>
            <div>
              <button className='yes-button yes-button:hover' onClick={() => setYesPressed(true)} style={{fontSize: yesButtonSize}}>Yes</button>
              <button className='no-button no-button:hover' onClick={handleNoClick} style={{fontSize: noButtonSize}}>{getNoButtonText()}</button>
            </div>
            </div> 
          )}
        </div>
      )}
    </div>
  )
}

export default App
