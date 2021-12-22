import { useState } from 'react'
import './App.css'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
		<div className="App">
			<h1>Magic Match</h1>
			<div>React-Firebase-lesson-60 #3</div>
			<div>https://github.com/iamshaunjp/React-Firebase/tree/lesson-60</div>
			<button onClick={shuffleCards}>New Game</button>

			AAA<div className="card-grid">
				{cards.map((card) => (
					<div className="card" key={card.id}>
						<div>
							<img className="front" src={card.src} alt="card front" />
							<img className="back" src="/img/cover.png" alt="cover" />
						</div>
					</div>
				))}
			</div>
      BBB
		</div>
	)
}

export default App
