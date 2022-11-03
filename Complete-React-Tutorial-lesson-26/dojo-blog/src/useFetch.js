import { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

  // console.log('useFetch~~~')
	useEffect(() => {
		const abortCont = new AbortController()

		fetch(url, { signal: abortCont.signal })
			.then((res) => {
				if (!res.ok) {
					// error coming back from server
					throw Error('could not fetch the data for that resource')
				}
				return res.json()
			})
			.then((data) => {
				// alert(JSON.stringify(data))
				// カスタムフックの中では、console.log は無効か？
				// console.log('🚀 ~ seFetch.js ~ line 21 ~ data', data)
				setIsPending(false)
				setData(data)
				setError(null)
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('fetch aborted')
				} else {
					// auto catches network / connection error
					setIsPending(false)
					setError(err.message)
				}
			})

		// abort the fetch
		return () => abortCont.abort()
	// }, [])
	}, [url])

	return { data, isPending, error }
}

export default useFetch
