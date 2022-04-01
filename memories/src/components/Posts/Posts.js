import useStyles from './styles';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress,Typography } from '@material-ui/core';

const GlassmorphismContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};

const Posts = ({setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();

    if (!posts.length && !isLoading)
    return (
      <GlassmorphismContainer>
        <Typography variant="h2">No posts yet.</Typography>
      </GlassmorphismContainer>
    );

  return isLoading ? (
    <GlassmorphismContainer>
      <CircularProgress />
    </GlassmorphismContainer>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;