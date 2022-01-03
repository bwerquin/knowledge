import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WebIcon from '@mui/icons-material/Web';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { Link as RouterLink} from "react-router-dom";


const Home = ({}) => (
  <>
    <SecondaryTitle />
    <Start />
  </>
);

function SecondaryTitle() {
  const classes = useStyles();
  return (
    <>
     <Paper elevation={0}>
      <Typography className={classes.root} color="textSecondary" align="center">
        Parcourir l'offre de service du SI Collecte
      </Typography>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
}));

function Start() {
  return (
    
      <Typography variant="h4" align="center" component="h4" gutterBottom>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
            <ListItemLink to="/tools" primary="par outils, l'ensemble des fonctionnalités couvertes par produits" icon={<WebIcon />} />
            <ListItemLink to="/services" primary="par service, un regroupement des fonctionnalités par macro services, de la conception d'enquête à l'exploitation des données" icon={<FeaturedPlayListIcon />} />
            <ListItemLink to="/gsbpm" primary="par phase du gsbpm, de l'étape concevoir à l'étape traitements" icon={<TableChartIcon />} />
            <ListItemLink to="/milestones" primary="par jalon, l'ensemble des fonctionnalités déjà disponibles et celles à venir" icon={<FlagIcon />} />
            <ListItemLink to="/users" primary="par acteur, l'ensemble des fonctionnalités proposées aux utilisateurs" icon={<PersonIcon />} />
            <ListItemLink to="/select" primary="par selection, une vue filtrée où l’on peut sélectionner un certain nombre de services/fonctionnalités/jalon... pour une vision spécifique" icon={<DynamicFeedIcon />} />
          </List>
      </Paper>
      </Typography>

  );
}

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default Home;
