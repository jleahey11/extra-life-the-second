import React from 'react';

import {
    Typography
} from '@material-ui/core';

const Participation = props => (
    <>
        <Typography align="center" variant="h4">Participation</Typography>
        <Typography variant="h5">What You'll Need</Typography>
        <ul>
            <li>Nintendo Switch</li>
            <li>Nintendo Switch Internet Pass ($20 per year)</li>
            <li>Smash Bros Ultimate on the latest patch (vX.Y.Z)</li>
        </ul>
        <Typography variant="h5">How to Enter</Typography>
        <ul>
            <li>Sign up for a Challonge Account</li>
            <li>Submit a $5+ donation with your Challonge Account & Nintendo Id included in the message.</li>
            <li>We will add you to the tournament roster.</li>
            <li>If you have any troubles entering the tournament, contact Alex Lyons and he can assist you.</li>
        </ul>
    </>
);

export default Participation;
