import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import LoginPopup from '../App';


class EmployeePopup extends Component {

    state = {
        open: true,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        return (
            <div>
                <RaisedButton
                    className={"LoginButton"}
                    primary={true}
                    label="Register Business"
                    onClick={this.handleOpen}

                />

                <Dialog
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >


                    <div className={"LoginCard"}>
                        <div
                            className={"LoginCardHeader"}
                            actAsExpander={true}
                            showExpandableButton={false}
                        >
                            Employee Registration
                        </div>

                        <div>
                            <TextField
                                floatingLabelText="First Name"
                                floatingLabelFixed={false}
                                name='fname'
                            /><br />

                            <TextField
                                floatingLabelText="Last Name"
                                floatingLabelFixed={false}
                                name='lname'
                            /><br />

                            <TextField
                                floatingLabelText="Company ID or Company Name"
                                floatingLabelFixed={false}
                                name='business_id'
                            /><br />

                            <TextField
                                floatingLabelText="Email"
                                floatingLabelFixed={false}
                                name='email'
                            /><br />

                            <TextField
                                floatingLabelText="Confirm Email"
                                floatingLabelFixed={false}
                                name='confirm_email'
                            /><br />

                            <TextField
                                type={"password"}
                                floatingLabelText="Password"
                                floatingLabelFixed={false}
                                name='password'
                            /><br />

                            <TextField
                                type={"password"}
                                floatingLabelText="Confirm Password"
                                floatingLabelFixed={false}
                                name='confirm_passowrd'
                            /><br />

                            <RaisedButton label="Register" primary={true} />
                        </div>

                        <div className={"LoginCardFootter"}>
                            <br />
                            <Link to="../App">
                                <RaisedButton
                                    label="Back"
                                    onClick={this.handleClose} />
                            </Link>
                        </div>

                        <div>
                            <Route path="/App.js" component={LoginPopup} />

                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default EmployeePopup;
