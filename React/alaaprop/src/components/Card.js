import React, { Component } from 'react';

class Card extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    render() {
        const { firstName, lastName,  hairColor } = this.props;
        const{age}=this.state;
        return (
            <div>
                <h2>{firstName} , {lastName}</h2>
                <p>age : {age}</p>
                <p>hair color : {hairColor}</p>
                <button onClick={ () => { this.setState({ age: age+1 }) } }>increase Age</button>  
            </div>
        );
    }

    
}
export default Card;