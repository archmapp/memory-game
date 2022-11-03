import BlogList1 from './BlogList1'
import useFetch from './useFetch'

const Home1 = () => {
	const {
		error,
		isPending,
		data: blog,
	} = useFetch('http://localhost:8000/blogs/1')
	console.log('🚀 ~ file: Home.js ~ line 6 ~ Home ~ blogs', blog)

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{/* {blogs && <p>{blog.title}</p>} */}
			{blog && <BlogList1 blog={blog} />}
		</div>
	)
}

export default Home1
