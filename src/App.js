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

  deleteCard = (key) => {
    this.setState({characters: this.state.characters.filter(item => item.id !== key)})
  }

  resetCards = () => {
    this.setState({characters: data})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h2>Rick & Morty Characters</h2>
        </header>
        <main>
          <section className="section" style={{'backgroundColor': '#FBF8F3'}}>
            <div style={{textAlign: 'center', marginBottom: '-45px'}}>
              <button 
              className='btn-link outline reset-button' 
              style={{marginTop: '15px'}}
              onClick={() => this.resetCards()}
              >
                Reset Cards
              </button>
            </div>
            <div className="hero" style={{paddingTop: 0}}>
              <div className="hero-body">
                <div className="content">
                
                  {/*<!-- Contenedor de tarjetas -->*/}
                  <div className="grid grid-cols-3 grid-gap-3">
  
                    {
                      this.state.characters.map((char, idx) => {
                        return < Card key={idx} info={char} onDelete={this.deleteCard} />
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
