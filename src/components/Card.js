import React, { Component } from 'react'

class Card extends Component{
    render(props){
        return (
            <div class="card u-flex u-flex-column">

                <div class="card__container">
                    <div class="card__image" style={{"background-image": "url(" + props.info.image + ")"}}></div>
                </div>
            
                <div class="content">
                   <p class="title">{props.info.name}</p>
                   <p>Status: {props.info.status}</p>
                   <p>Species: {props.info.species}</p>
                   <p>Origin: {props.info.origin.name}</p>
                </div>

            </div>
        )
    }
}

export default Card