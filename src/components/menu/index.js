import React from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WebIcon from '@mui/icons-material/Web';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TableChartIcon from '@mui/icons-material/TableChart';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { Link, useLocation, matchPath } from "react-router-dom";

export default function Menu() {
    const routeMatch = useRouteMatch(['/tools', '/services', '/gsbpm', '/milestones', '/users', '/select']);
    const currentTab = routeMatch?.path;
    return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile={true} value={currentTab}>
          <Tab wrapped to="/tools" value="/tools" label="Outils" icon={<WebIcon fontSize="small"/>} component={Link}/>
          <Tab wrapped to="/services" value="/services" label="Services" icon={<FeaturedPlayListIcon fontSize="small"/>} component={Link}/>
          <Tab wrapped to="/gsbpm" value="/gsbpm" label="Gsbpm" icon={<TableChartIcon fontSize="small"/>} component={Link}/>
          <Tab wrapped to="/milestones" value="/milestones" label="Jalons" icon={<FlagIcon fontSize="small"/>} component={Link}/>
          <Tab wrapped to="/users" value="/users" label="Acteurs" icon={<PersonIcon fontSize="small"/>} component={Link}/>
          <Tab wrapped to="/select" value="/select" label="Selection" icon={<DynamicFeedIcon fontSize="small"/>} component={Link}/>
      </Tabs>
    </Box>
  
    );
  }

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }


  