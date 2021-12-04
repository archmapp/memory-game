import { useState, useEffect } from 'react'
import './App.css'
import QuickView from './components/utils/QuickView'
import SingleCard from './components/SingleCard'

const cardImages = [
	{ src: '/img/helmet-1.png', matched: false },
	{ src: '/img/potion-1.png', matched: false },
	{ src: '/img/ring-1.png', matched: false },
	{ src: '/img/scroll-1.png', matched: false },
	{ src: '/img/shield-1.png', matched: false },
	{ src: '/img/sword-1.png', matched: false },
]

function App() {
	const [cards, setCards] = useState([])
	const [turns, setTurns] = useState(0)
	const [choiceOne, setChoiceOne] = useState(null)
	const [choiceTwo, setChoiceTwo] = useState(null)
	const [disabled, setDisabled] = useState(false)

	// shuffle cards for new game
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }))

		setChoiceOne(null)
		setChoiceTwo(null)
		setCards(shuffledCards)
		setTurns(0)
	}

	// handle a choice
	const handleChoice = (card) => {
		// console.log(card)
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
	}

	// compare 2 selected cards
	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true)

			if (choiceOne.src === choiceTwo.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true }
						} else {
							return card
						}
					})
				})
				resetTurn()
			} else {
				setTimeout(() => resetTurn(), 1000)
			}
		}
	}, [choiceOne, choiceTwo])

	// reset choices & increase turn
	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns((prevTurns) => prevTurns + 1)
		setDisabled(false)
	}

	// start new game automagically
	useEffect(() => {
		shuffleCards()
	}, [])

	return (
		<>
			<div className="hero is-primary is-bold">
				<div className="hero-body h_hero">
					<div className="">
						{/* <div className="is-flex is-justify-content-space-between is-align-items-center"> */}
						<h1 className="is-size-6-mobile is-size-5-tablet is-size-4-desktop has-tooltip-bottom has-tooltip-warning"
						data-tooltip="Memory Card">
							<span className="has-text-black-ter">Shaun忍者</span> のご紹介
						</h1>
						<h2 className="is-size-7-mobile is-size-6-tablet is-size-5-desktop">
							しんけいすいじゃく
						</h2>
						<p className="has-text-grey-dark is-size-7-mobile is-size-7-tablet is-size-6-desktop mt-3">
							This memory-game is created by Shaun 忍者
						</p>
					</div>
				</div>
			</div>

			<div className="App">
				<div className="pb-5">
					<h1>忍者カード</h1>
					<div className="is-flex is-justify-content-space-around">
						<button className="has-text-warning" onClick={shuffleCards}>
							新規開始
						</button>
						<p className="has-text-warning is-size-5">手数: {turns}</p>
					</div>
					<div className="card-grid">
						{cards.map((card) => (
							<SingleCard
								key={card.id}
								card={card}
								handleChoice={handleChoice}
								flipped={
									card === choiceOne || card === choiceTwo || card.matched
								}
								disabled={disabled}
							/>
						))}
					</div>
				</div>
			</div>

			<nav id="orderB">
				<div className="is-flex is-justify-content-center is-align-items-center has-background-grey py-2">
					{/* <div className="is-flex is-justify-content-center is-align-items-center has-background-grey py-2 "> */}
					<button
						className="button is-primary has-tooltip-top has-tooltip-warning"
						data-tooltip="トグル: [Escape]キーも可"
						id="quick"
					>
						ゲーム一覧
					</button>
					<span className="has-text-white ml-5">そのほかの ゲームアプリ</span>
				</div>
			</nav>

			<QuickView />
		</>
	)
}

export default App
