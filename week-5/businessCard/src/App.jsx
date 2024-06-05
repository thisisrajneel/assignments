import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [cards, setCards] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [interests, setInterests] = useState([])

  const addCard = () => {
    
    const newCard = {
      name: name,
      description: description,
      interests: interests
    }

    setCards(cards.concat(newCard))
  }

  const interestsHandler = (interestString) => {
    interestString = document.getElementById('interestString').value
    let interestArray = interestString.split(',')
    interestArray = interestArray.filter( i => i!="" && i!=" ")
    setInterests(interestArray)
  }

  return (
    <>
      <input className='inputTxt' type='text' placeholder='name' onChange={(e) => setName(e.target.value)}></input>
     
      <input className='inputTxt' type='text' placeholder='description' onChange={(e) => setDescription(e.target.value)}></input>
      
      <input id='interestString' className='inputTxt' type='text' placeholder='enter your interests separated by commas' onChange={(e) => interestsHandler(e.target.value)}></input>

      <button onClick={() => addCard()}>
        add card
      </button>

      <div id='cardContainer'>
        <Card name={'Rajneel'} description={'full stack dev'} interests={['gym', 'code', 'movies']} />
      </div>
    </>
  )
}

export default App
