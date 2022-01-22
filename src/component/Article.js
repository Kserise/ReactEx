import React, { Component } from 'react';
class Article extends Component {
    render(){
        console.log('app article');
        return (
        <article>
            <h2>{this.props.title}</h2>
            <p>{this.props.sub}</p>
        </article>
        );
    }
}

export default Article;