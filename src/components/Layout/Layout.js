import React from 'react';

import Wrapp from '../../hoc/Wrapp';
import classes from './Layout.css';

const layout = ( props ) => (
    <Wrapp>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapp>
);

export default layout;