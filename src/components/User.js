import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 50,
        height: 50,
    },
});


class User extends React.Component {
    render() {
        const classes = this.props.classes;
        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                align="center"
            >
                <Grid item>
                    <Avatar
                        className={classes.bigAvatar}
                        alt="React Native"
                        src={this.props.image}
                    />
                </Grid>
                <Grid item>
                    <p>{this.props.username}</p>
                </Grid>
            </Grid>
        );
    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);