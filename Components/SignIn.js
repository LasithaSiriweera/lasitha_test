import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';


export default class SignIn extends React.Component {

    constructor(Props) {
        super(Props);
        this.state = {
            email: '',
            password: '',
            emailError: null,
            passwordError: null
        }
    }

    /**
     * Validate email 
     */
    isEmailValidated() {
        if (this.state.email === null || this.state.email.trim() === '') {
            this.setState({
                emailError: 'Email is empty',
            })
            return false
        } else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === false) {
                this.setState({
                    emailError: 'Email is not a valid one',
                })
                return false;
            } else {
                return true;
            }
        }
    }

    /**
     * Check password is validated
     */
    isPasswordValidated() {
        if (this.state.password === null || this.state.password.trim() === '') {
            this.setState({
                passwordError: 'Password is empty',
            })
            return false;
        } else {
            return true;
        }
    }


    /**
     * login function
     */
    login() {
        this.setState({
            emailError: null,
            passwordError: null,
        })
        if (this.isEmailValidated() && this.isPasswordValidated()) {
            alert('Login Success');
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.textContainer}>
                        <Text style={styles.emailLabel}>
                            Email
                    </Text>
                        <TextInput
                            style={styles.emailInput}
                            placeholder="Email"
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                        />
                    </View>

                    {
                        this.state.emailError? <Text style={styles.errorText}>{this.state.emailError}</Text>  : null
                    }
                    <View style={styles.textContainer}>
                        <Text style={styles.passwordLabel}>
                            Password
                    </Text>
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            style={styles.passwordInput}
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                        />
                    </View>

                    {
                        this.state.passwordError? <Text style={styles.errorText}>{this.state.passwordError}</Text>  : null
                    }
                    <View style={styles.btnSignIn}>
                        <Button
                            title="Sign in"
                            onPress={() => { this.login() }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '90%',
        borderWidth: 2
    },
    textContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
        marginTop: 10
    },
    emailInput: {
        marginLeft: 40,
        borderWidth: 2,
        width: '60%'
    },
    emailLabel: {
        textAlign: 'left',
        width: '20%',
        marginLeft: 20
    },
    passwordInput: {
        marginLeft: 40,
        borderWidth: 2,
        width: '60%'
    },
    passwordLabel: {
        textAlign: 'left',
        width: '20%',
        marginLeft: 20
    },
    btnSignIn: {
        alignSelf: 'flex-end',
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderWidth: 2
    },
    errorText:{
        alignSelf:'center',
        color: 'red'
    }

});