import React, { Component } from 'react'
import axios from 'axios'
export default class Getapi extends Component {
    
        state = {
            persons: []

        }

    
    componentDidMount() {

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            
            <div>
                <ul>
                    {
                   
                    
                this.state. persons.map((item,i) => {
                    if(i<7)
                            return (
                                <>
                                <li>{item.id}</li>
                                <li>{item.name}</li>
                             

                                </>
                            )
                        })
                    }


                </ul>

            </div>
        )
    }
}
