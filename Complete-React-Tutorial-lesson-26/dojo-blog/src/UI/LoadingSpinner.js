// import classes from './LoadingSpinner_small.module.css';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
		<div className={classes.loading}>
			<div className={classes.spinner}></div>
		</div>
	)
  // return <div className={classes.spinner}></div>;
}

export default LoadingSpinner;
