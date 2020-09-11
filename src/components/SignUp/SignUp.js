import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {

    constructor() {
        super();
       

        this.state = {
          
            name:'',
            email: '',
            password: '',
            errors: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    handleChange = (e) => {
        const { value, name, type, checked } = e.target
        this.setState({
            ...this.state,
            [name]: type === "checkbox" ? checked : value
        });
    }

    checkFormErrors = (name, value) => {
        let errors = this.state.errors;
        let status=true;
        switch (name) {
            case 'name':
                errors.name = value === '' ? 'Name is required!' : '';
                status=false;
                break;
            case 'email':
                errors.email = value === '' ? 'Email is required!' : '';
                status=false;
                break;
            case 'password':
                errors.password = value === '' ? 'Password is required!' : '';
                status=false;
                break;
            default:
                break;
        }
       
        return status;
    }


    render() {
        return (
            <div className="default-layout">
                <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                    <div class="card card0 border-0">
                        <div class="row d-flex">
                            <div class="col-lg-6">
                                <div class="card1 pb-5">
                                    <div class="row"> <img src="https://dynamiconlinetechnologies.com/wp-content/uploads/2019/12/doto-white-small.png" class="logo" /> </div>
                                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" /> </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card2 card border-0 px-4 py-5">

                                <div class="row px-3">
                                        <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Name</h6>
                                        </label>
                                        <input class="mb-4" type="text" name="name" placeholder="Enter your name" />
                                    </div>

                                    <div class="row px-3">
                                        <label class="mb-1">
                                            <h6 class="mb-0 text-sm">Email Address</h6>
                                        </label>
                                        <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
                                    </div>

                                    <div class="row px-3"> <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Password</h6>
                                    </label> <input type="password" name="password" placeholder="Enter password" /> </div>
                                    <div class="row px-3 mb-4">
                                    </div>
                                    <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center">Register</button> </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-blue py-4">
                            <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                                <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;
