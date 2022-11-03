import { Link } from 'react-router-dom';

const BlogList1 = ({ blog }) => {
  return (
		<div className="blog-list">
			useFetch('http://localhost:8000/blogs/1')
			<div className="blog-preview">
				<Link to={`/blogs/${blog.id}`}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
				</Link>
			</div>
		</div>
	)
}
 
export default BlogList1;