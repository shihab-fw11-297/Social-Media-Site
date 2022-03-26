import useStyles from './styles';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    return (
        <>
       <div className={classes.paper}>Posts</div>
       <Post />
       <Post />
     </>
    )
}

export default Posts;