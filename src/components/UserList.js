import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import User from './User'

const styles = theme => ({
    root: {
        paddingTop:0,
        flexGrow: 1,
    },
    userList: {
        overflow: 'auto',
    },
    leftGrid: {
        height: window.innerHeight*0.96,
        paddingTop:70,
        paddingLeft: 40,
        overflow: 'auto'
    },
    leftMenu: {
        textAlign: 'center',
        backgroundColor: '#42A5F5',
        color: 'white',
    },
});


class UserList extends React.Component {
    render() {
        const classes = this.props.classes;
        const users = this.props.users.map(function(user) {
            return <User username={user.name} image={user.image} />
        })
        return (
            <Grid
                item
                className={classes.root}
                xs={3}
            >
                <Paper elevation={5} className={classes.leftMenu}>
                    <Grid
                        className={classes.leftGrid}
                        container
                        direction="column"
                        justify="flex-start"
                        align="flex-start"
                    >
                        <Grid item className={classes.userList}>
                            <h4>In this chat:</h4>
                            {users}

                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

UserList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
