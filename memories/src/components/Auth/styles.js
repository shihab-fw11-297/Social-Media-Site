import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  image: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -130%)',
    padding: '10px',
  },
  image1: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(270%, -113%)',
    padding: '10px',
  },
  headings: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -20%)',
    padding: '10px',
  },
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    position: 'absolute',
    left: '55%',
    right: '1%',
    width: '28%',
  },
  paper1: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    display:'flex',
    left: '2%',
    right: '1%',
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(10),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    paper1: {
      display: 'none',
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
      position:'static',
      width: '100%',
    },
  }
}));