import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';

const styles = theme => ({
    userList: {
        overflow: 'auto',
    },
    grid: {
        height: window.innerHeight*0.96,
        paddingTop:70,
        paddingLeft: 40,
        overflow: 'auto'
    },
});


class UserSelect extends React.Component {
    state = {
        value: this.props.currentUser,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const classes = this.props.classes;
        const users = this.props.users.map(function(user) {
            return (
                    <FormControlLabel value={user.name}
                                      control={<Radio />}
                                      label={user.name}
                    />
            )
        })
        return (
            <Grid
                className={classes.grid}
                container
                direction="column"
                justify="flex-start"
                align="center"
            >
                <Grid item className={classes.userList}>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Current User</FormLabel>
                        <RadioGroup
                            aria-label="current user"
                            name="current user"
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                        >
                            {users}
                        </RadioGroup>
                    </FormControl>

                </Grid>
                <Grid item
                      direction="row">
                    <Button onClick={() => {this.props.exit()}} raised color="accent" >Exit</Button>
                    <Button onClick={() => {this.props.selectUser(this.state.value)}} raised color="primary">Select</Button>
                </Grid>
            </Grid>
        );
    }
}

UserSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSelect);