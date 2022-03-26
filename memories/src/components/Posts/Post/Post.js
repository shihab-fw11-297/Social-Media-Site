import useStyles from './styles';

const Post = () => {
    const classes = useStyles();
    return (
        <div className={classes.paper}>Posts</div>
    )
}

export default Post;