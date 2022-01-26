import React from "react";
import axios from "axios";

import './App.css'

class Appnew extends React.Component{

    state = {
        text: '',
        author: ''
    }

    componentDidMount() {
        this.fetchQuote()
    }

    fetchQuote = () => {
        const rand = Math.floor(Math.random() * 1643)
        axios.get('https://type.fit/api/quotes')
            .then((response) => {
                const { text, author } = response.data[rand]
                this.setState({ text , author})
            })
    }

    render(){
        const {text, author} = this.state
        return(
            <div className="app">
                <div className="container">
                    <h1>{text}</h1>
                    <h2>- {author}</h2>
                    <button className="btn" onClick={this.fetchQuote}>
                        <span>Next Quote</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Appnew