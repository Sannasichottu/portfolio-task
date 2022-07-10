import React, { Component } from 'react';

class Contact extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://61ef7787732d93001778e3c3.mockapi.io/register')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render () {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else{

            return(
                <div className="Contact">
                   
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                               id | {item.id} | Name : {item.username} | Email : {item.email} | Ph : {item.phonenumber} | Password : {item.password}
                            </li>
                        ))}
                    </ul>

                </div>
            );
        }

    }
}
export default Contact;