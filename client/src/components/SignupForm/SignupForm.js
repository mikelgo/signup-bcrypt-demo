
import React, { Component } from 'react'
import axiosInstance from "../../axiosInstance";

class SignupForm extends Component {
    state = {
        user: {
            mail: "",
            pw: ""
        }
    }
    on
    onSubmit() {
        const mail = document.getElementById('exampleInputEmail1').value;
        const pw = document.getElementById('exampleInputPassword1').value;
        const user = {
            mail: mail,
            pw: pw
        }
        axiosInstance({
            method: 'post',
            url: '/user',
            data: {user}
          })  
          .then(res => {
                console.log(res);
                alert("User successful submitted - Check your Backend console output");
                this.history.push('/');
            }).catch(error => console.log(error));

        // axiosInstance.post('/user',user)
        //     .then(res => {
        //         console.log(res);
        //         this.history.push('/');
        //     })
        //     .catch(error => console.log(error));
    }
  

    render() {
        return (
            <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
        )
    }
}


export default SignupForm;