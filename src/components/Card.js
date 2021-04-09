import React, { Component } from 'react'

class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            originalColor: 'white',
            defaultColor: 'white',
            color: 'white'
        }
    }

    changeColor(newColor) {
        this.setState({color: newColor})
    }

    changeDefaultColor(newColor) {
        if (newColor === this.state.defaultColor){
            this.setState({defaultColor: this.state.originalColor})
        } else {
            this.setState({defaultColor: newColor})
        }
    }

    render() {
        return (
            <div 
            className="card u-flex u-flex-column" 
            onMouseEnter={() => this.changeColor('lightblue')}
            onMouseLeave={() => this.changeColor(this.state.defaultColor)}
            style = {{backgroundColor: this.state.color}}
            >

                <div className="card__container">
                    <div className="card__image" style={{"backgroundImage": "url(" + this.props.info.image + ")"}}></div>
                </div>
            
                <div className="content">
                   <p className="title">{this.props.info.name}</p>
                   <p>Status: {this.props.info.status}</p>
                   <p>Species: {this.props.info.species}</p>
                   <p>Origin: {this.props.info.origin.name}</p>
                </div>

                <div className="card__action-bar u-center">
                    <button 
                    className="btn-link outline" 
                    onClick={() => this.changeDefaultColor('lightgreen')}
                    >
                        Change Color
                    </button>
                    <button 
                    className="btn-link outline"
                    onClick={this.props.delete(this.props.info.id)}
                    >
                        Delete
                    </button>
                </div>

            </div>
        )
    }
}

export default Card