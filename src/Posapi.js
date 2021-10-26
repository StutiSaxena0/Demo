import React, { Component } from 'react'
import axios from 'axios';
export default class Posapi extends Component {

    state = {
    
       name:'', 
       email:'',
       mobile:''
       
    }

    // handleChange = event => {
    //     this.setState({ name: event.target.value});
    //     this.setState({ email: event.target.value})
    //     this.setState({ mobile: event.target.value})
    //     this.setState({ id: event.target.value });
        
    //   }
  
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile

        };
    
        axios.post(`http://localhost:3000/users`, { user})
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
      

    render() {
        return (
            <div>
                <form onSubmit={this. handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name"  onChange= {(event)=> this.setState({ name: event.target.value})}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Person email:
                        <input type="text" name="email"  onChange= {(event)=> this.setState({ email: event.target.value})}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Person number:
                        <input type="text" name="mobile"  onChange= {(event)=> this.setState({ mobile: event.target.value})}/>
                    </label>

                   
                    <button type="submit">Add</button>
                  
                </form>
            </div>
        )
    }
}
