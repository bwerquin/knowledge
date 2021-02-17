import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SecondaryTitle from './SecondaryTitle';
import Footer from './Footer';
import knowledgeLogo from './img/knowledge.svg';


function App() {
  return (
    <Container maxWidth="sm">
    <Box my={4}>
    <div>
    
      <Typography variant="h2" align="center" component="h1" gutterBottom>
      <img src={knowledgeLogo} alt="knowledge logo" />
        Knowledge
      </Typography>
      </div>
      <SecondaryTitle />
      <Footer><Copyright /></Footer>
    </Box>
  </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'PWA Questionnaire Powered by '}
      <Link color="inherit" href="https://github.com/InseeFr/Lunatic">
        Lunatic
      </Link>
      {'.'}
    </Typography>
  );
}

export default App;
