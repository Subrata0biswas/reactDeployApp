import React from "react";

import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import bgImage from "../../assets/images/login.jpg";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing() * 2}px ${theme.spacing() * 3}px ${
      theme.spacing() * 3
    }px`,
    opacity: 0.5,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing() * 3,
  },
});

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  // Handle input
  onChangeInputHandle = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({
      [name]: value,
    });
  };

  onClickLogIn = (evt) => {
    //const emailValidator = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    //evt.preventDefault()
    const num = /^[0-9\b]+$/;
    if (
      this.state.phoneNo.length <= 0 ||
      num.test(this.state.phoneNo) !== true
    ) {
      this.setState({
        openToast: true,
        messageType: "warning",
        message: "Please enter correct phone number.",
      });
    } else if (this.state.password.length <= 0) {
      this.setState({
        openToast: true,
        messageType: "warning",
        message: "Please enter password.",
      });
    } else {
      this.props.onLogin(this.state.phoneNo, this.state.password);
    }
  };

  onTextKeyPress(evt) {
    if (evt.key === "Enter") {
      this.onClickLogIn();
    }
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    return (
      <div
        // styles={{ backgroundImage: `url(${bgImage})` }}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "87vh",
        }}
      >
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(event) => {
                    this.onChangeInputHandle(event);
                  }}
                  onKeyPress={this.onTextKeyPress.bind(this)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => {
                    this.onChangeInputHandle(event);
                  }}
                  onKeyPress={this.onTextKeyPress.bind(this)}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => this.onClickLogIn()}
              >
                Log In
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LogIn);
