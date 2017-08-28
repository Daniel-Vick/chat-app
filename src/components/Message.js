import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    content: {
        fontSize: 15,
        marginLeft:5,
        marginRight:5,
        marginTop:0,
        marginBottom:3,
    },
    author: {
        fontSize: 10,
        marginLeft:5,
        marginRight:5,
        marginTop:3,
        marginBottom:0,
    },
    currentUser: {
        backgroundColor: "#42A5F5",
        color: 'white',
        marginLeft:20,
        marginTop:10,
        marginRight:10,
        marginBottom:10,
        paddingLeft:5,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        textAlign: 'flex-start',
    },
    user: {
        marginLeft:20,
        marginTop:10,
        marginBottom:10,
        marginRight:10,
        paddingLeft:5,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        textAlign: 'flex-start',
        color: theme.palette.text.primary,
    }
});


class Message extends React.Component {
    render() {
        const classes = this.props.classes;
        const author = this.props.currentUser? "" : this.props.author;
        return (
                <Grid item>
                <Paper className={this.props.currentUser ? classes.currentUser : classes.user}>
                    <p className={classes.content}>{this.props.content}</p>
                    <p className={classes.author}>{author}</p>
                </Paper>
                </Grid>
        );
    }
}

Message.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);