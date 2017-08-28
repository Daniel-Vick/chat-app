import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import TextField from 'material-ui/TextField';
import Message from './Message';
import UserList from './UserList'
import UserSelect from './UserSelect'
import ChatView from 'react-chatview';
import _ from 'lodash';
import Modal from 'react-modal';

import fakeData from '../fixtures/fakedata.json';
const messages = fakeData.messages;
const users = fakeData.users;

const styles = theme => ({
    root: {
        paddingTop:0,
        flexGrow: 1,
    },
    messageArea: {
        marginTop:70,
    },
    flex: {
        flex: 1,
    },
    messages: {
        height: window.innerHeight * 0.7
    },
    input: {
        marginTop: 20,
        marginLeft:40,
        paddingBottom: 10,
    },
});

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            currentUser: 'Jane',
            messages: messages,
            users: users,
            modalOpen: false,
        };
    }
    onComponentDidMount() {
        /*
        When component first loads, fetch the chat history and then open a websocket
        fetchChat();
        openSocket();
        */
    }
    fetchChat() {
      /*
        Fetch chat history from backend to load initial chat data
      */
    }
    openSocket() {
      /*
         Open websocket to backend to provide realtime updates of the chat.
      */
    }
    sendMessage() {
        /*
         Send new message on websocket to backend
         */
    }
    appendMessage() {
        console.log("Appending " + this.state.input);
        if (this.state.input !== "") {
            this.setState({messages:
                                this.state.messages.concat([{author: this.state.currentUser,
                                                             content: this.state.input,
                                                             user: true}]),
                           input: ""})
        }
        //Send message on websocket
        /* sendMessage({author: this.state.currentUser,
                        content: this.state.input,
                        timestamp: current_time});
        */
    }
    loadMoreHistory () {
        return new Promise((resolve, reject) => {
            let more = _.range(20).map(v=>'yo');
            this.setState({ messages: this.state.messages.concat(more)});
            resolve();
        });
    }
    exit() {
        this.setState({modalOpen: false});
    }
    selectUser(user) {
        this.setState({modalOpen: false, currentUser: user});
    }
    render() {
        const that = this;
        const classes = this.props.classes;
        const messages = this.state.messages.map(function(message) {
            var isCurrentUser = message.author === that.state.currentUser;
            return <Message content={message.content}
                            author={message.author}
                            user={message.user}
                            currentUser={isCurrentUser}
                    />
        })
        return (

            <div className={classes.root}>
                <Modal
                    isOpen={this.state.modalOpen}
                    contentLabel="Modal"
                >
                    <UserSelect users={this.state.users}
                                currentUser={this.state.currentUser}
                                exit={this.exit.bind(this)}
                                selectUser={this.selectUser.bind(this)}
                    />
                </Modal>
                <AppBar elevation={6}>
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            AeroFS TinyChat
                        </Typography>
                        <Button onClick={() => {this.setState({modalOpen: !this.state.modalOpen})}} color="contrast">Select User</Button>
                    </Toolbar>
                </AppBar>
                <Grid container className={classes.root}>
                    <UserList users={this.state.users}/>
                    <Grid elevation={2} item xs={7}>
                        <Grid
                            className={classes.messageArea}
                            container
                            direction="column"
                            justify="flex-start"
                            align="flex-start"
                        >

                                <TextField
                                    className={classes.input}
                                    placeholder="Type Message..."
                                    fullWidth
                                    value={this.state.input}
                                    onChange={event => this.setState({ input: event.target.value })}
                                    onKeyPress={(ev) => {
                                        console.log(`Pressed keyCode ${ev.key}`);
                                        if (ev.key === 'Enter') {
                                            // Do code here
                                            ev.preventDefault();
                                            this.appendMessage();
                                        }
                                    }}/>
                                <div style={{overflow: 'auto',
                                     height: window.innerHeight * 0.6,
                                     paddingRight: 40,
                                    marginLeft: 30,
                                }}>
                                    <ChatView className="message-list"
                                              flipped={true}
                                              scrollLoadThreshold={10}

                                              onInfiniteLoad={this.loadMoreHistory.bind(this)}>
                                        {messages}
                                    </ChatView>
                                </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
