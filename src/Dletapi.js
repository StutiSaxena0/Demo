import React, { Component } from 'react'
import axios from 'axios'
export default class Getapi extends Component {

    state = {
        persons: []

    }


    componentDidMount() {
      this.getapi()
       
    }
 
     getapi(){
        axios.get(`http://localhost:3000/users`)
        .then(res => {
            const persons = res.data;
            console.log(persons)
            this.setState({ persons });
        })

     }
    deleteUser(id) {
        console.log(id)
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
            this.getapi()
        }

    render() {
                return(
            
            <div>
            <ul>
                {


                    this.state.persons.map((item) => {

                        return (
                            <>
                                <li>{item.id}</li>
                                <li>{item.name}</li>
                                <li>{item.email}</li>
                                <li>{item.mobile}</li>
                                <button type="submit" onClick={() => this.deleteUser(item.id)} >delete</button>


                            </>
                        )
                    })
                }


            </ul>

            </div >
        )
    }
}
