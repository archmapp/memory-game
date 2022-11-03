import BlogList from './BlogList'
import useFetch from './useFetch'
import LoadingSpinner from './UI/LoadingSpinner'

const Home = () => {
	const {
		error,
		isPending,
		data: blogs,
	} = useFetch('http://localhost:8000/blogs')

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <LoadingSpinner></LoadingSpinner>}
			{/* {isPending && <div>Loading...</div>} */}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	)
}

export default Home
