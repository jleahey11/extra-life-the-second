import React from 'react';

import {
    Typography
} from '@material-ui/core';

const Rules = props => (
    <>
        <Typography align="center" variant="h4">Rules</Typography>
        <Typography>
            <ul>
                <li>3 Stock</li>
                <li>7 Minutes</li>
                <li>All Items are Off</li>
                <li>Stage Hazard Toggle: Off</li>
                <li>Final Smash Meter: Off</li>
                <li>Battlefield & Omega Stages</li>
            </ul>
        </Typography>
    </>
);

export default Rules;
