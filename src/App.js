import React, { Component } from 'react'

import Card from './components/Card'
import data from './rickandmorty.json'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      characters: data,
    }
  }

  deleteCard(key) {
    function findCard(char) {
      return char.id != key
    }
    this.setState({characters: this.state.characters.filter(findCard)})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2>Rick & Morty Characters</h2>
        </header>
        <main>
          <section className="section" style={{'backgroundColor': '#FBF8F3'}}>
            <div className="hero">
              <div className="hero-body">
                <div className="content">

                  <button className='u-center btn-link outline'>Reset Cards</button>
                  
                  {/*<!-- Contenedor de tarjetas -->*/}
                  <div className="grid grid-cols-3 grid-gap-3">
  
                    {
                      this.state.characters.map(function(char, idx) {
                        return < Card key={idx} info={char} delete={this.deleteCard} />
                      })
                    }
  
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>
            Pedro Fraguas
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
