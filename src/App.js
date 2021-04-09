import React, { Component } from 'react'

import Card from './components/Card'
import data from './rickandmorty.json'

class App extends Component{
  render(){
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
                  
                  {/*<!-- Contenedor de tarjetas -->*/}
                  <div className="grid grid-cols-3 grid-gap-3">
  
                    {
                      data.map(function(char, idx) {
                          return < Card info={char} key={idx} />
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
