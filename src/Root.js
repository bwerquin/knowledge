import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Footer from "./Footer";
import knowledgeLogo from "./img/knowledge.svg";
import Home from "./components/home";
import Users from "./components/users";
import Milestones from "./components/milestones";
import Select from "./components/select";
import Services from "./components/services";
import Tools from "./components/tools";
import Gsbpm from "./components/gsbpm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  Link: {
    color: '#000000',
    '&:hover': {
      color: '#000000',
  },
}})

function Root() {
  const classes = useStyles()
  return (
    <Router>
      <div>
        <Container maxWidth="sm">
          <Box my={4}>
            <Link href="/" underline="none" className={classes.Link} >
            <div>
              <Typography
                variant="h2"
                align="center"
                component="h1"
                gutterBottom
              >
                <img src={knowledgeLogo} alt="knowledge logo" />
                Knowledge
              </Typography>
            </div>
            </Link>
            <Switch>
              <Route exact path="/services" component={Services} />
              <Route exact path="/select" component={Select} />
              <Route exact path="/tools" component={Tools} />
              <Route exact path="/milestones" component={Milestones} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/gsbpm" component={Gsbpm} />
              <Route exact path="/" component={Home} />
            </Switch>

            <Footer>
              <Copyright />
            </Footer>
          </Box>
        </Container>
      </div>
    </Router>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Offre de service du SI Collecte - Insee - "}
      <Link color="inherit" href="https://github.com/bwerquin/Knowledge-Data">
        Knowledge
      </Link>
      {"."}
    </Typography>
  );
}

export default Root;
