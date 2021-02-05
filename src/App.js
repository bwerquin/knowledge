import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SecondaryTitle from './secondaryTitle';


function App() {
  return (
    <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Knowledge
      </Typography>
      <SecondaryTitle />
      <Copyright />
    </Box>
  </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Powered by '}
      <Link color="inherit" href="https://github.com/InseeFr/Lunatic">
        Lunatic
      </Link>
      {'.'}
    </Typography>
  );
}

export default App;
