import React, { Component } from 'react'

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            originalColor: 'white',
            color: 'white'
        }
    }

    changeColor(color) {
        console.log('Cambio de color a ' + color);
        if (this.state.color == this.state.originalColor){
            this.state.color = color
        } else {
            this.state.color = this.state.originalColor
        }
    }

    render() {
        return (
            <div 
            className="card u-flex u-flex-column" 
            onClick={() => this.changeColor('red')}
            style = {{backgroundColor: this.state.color}}
            >

                <div className="card__container">
                    <div className="card__image" style={{"backgroundImage": "url(" + this.props.info.image + ")"}}></div>
                </div>
            
                <div className="content" style={{"backgroundColor": this.state.color}}>
                   <p className="title">{this.props.info.name}</p>
                   <p>Status: {this.props.info.status}</p>
                   <p>Species: {this.props.info.species}</p>
                   <p>Origin: {this.props.info.origin.name}</p>
                </div>

            </div>
        )
    }
}

export default Card