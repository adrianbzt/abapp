// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PollRoundedIcon from '@material-ui/icons/PollRounded';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';

export const sections = (
    <div>
        <ListItem button onClick={function() { console.log('yes')}}>
            <ListItemIcon>
                <PollRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"  />
        </ListItem>
        <ListItem button onClick={function() { console.log('no')}}>
            <ListItemIcon>
                <CloudCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Run" />
        </ListItem>
    </div>
);