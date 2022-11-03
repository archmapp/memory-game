import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
	const { url } = useStorage(file)
	// Bulmaでは、progress は使わない。
	// console.log("🚀 ~ file: ProgressBar.js ~ line 6 ~ ProgressBar ~ progress", progress)

	useEffect(() => {
		handleProgress()
	}, [])

	useEffect(() => {
		if (url) {
			setFile(null)
			finishProgress()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url])
	// }, [url, setFile])

	const handleProgress = () => {
		const el = $$.q('.progress')
		el.removeAttribute('value')
	}

	const finishProgress = () => {
		const el = $$.q('.progress')
		el.setAttribute('value', '100')
	}

	return (
		<>
			{/* <article className="message is-primary py-3 pl-3">
				<div className="block"> */}
			<progress
				className="progress is-warning has-tooltip-top has-tooltip-primary mt-2"
				data-tooltip="handleProgress"
				style={{ width: '100%' }}
				onClick={handleProgress}
				value="50"
				max="100"
			>
				100%
			</progress>
			{/* </div>
			</article> */}
		</>
	)
}

export default ProgressBar
