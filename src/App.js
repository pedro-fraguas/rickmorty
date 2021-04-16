import React, { Component } from 'react'

import Card from './components/Card'
//import data from './rickandmorty.json'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nextPage: '',
      data: [],
      characters: [],
      count: 0
    }
  }

  deleteCard = (id) => {
    this.setState({characters: this.state.characters.filter(item => item.id !== id)})
    this.setState({count: (this.state.count + 1)})
  }

  resetCards = () => {
    this.setState({characters: this.state.data})
    this.setState({count: 0})
  }

  addCards = () => {
    fetch(this.state.nextPage)
    .then(r => r.json())
    .then((result) => {
      let characters = this.state.characters.concat(result.results)
      let data = this.state.data.concat(result.results)
      this.setState({characters: characters})
      this.setState({data: data})
      this.setState({nextPage: result.info.next})
    })
    .catch((e) => {console.log(e);})
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(r => r.json())
    .then((result) => {
      this.setState({characters: result.results})
      this.setState({data: result.results})
      this.setState({nextPage: result.info.next})
    })
    .catch((e) => {console.log(e);})
  }

  render() {
    return (
      <div className="App">
        <header
        style={{height: '80px', backgroundColor: 'darkgray', textAlign: 'center', paddingTop: '20px'}}
        >
          <h2>Rick & Morty Characters</h2>
        </header>
        <main>
          <section className="section" style={{'backgroundColor': '#FBF8F3'}}>
            <button 
            className='btn-link outline' 
            style={{position: 'absolute', left: '45%', top: '100px'}}
            onClick={() => this.resetCards()}
            >
              Reset Cards
            </button>
            <p
            style={{position: 'absolute', left: '58%', top: '109px'}}
            >
              Tarjetas eliminadas: {this.state.count}
            </p>
            <div className="hero" style={{paddingTop: '45px'}}>
              <div className="hero-body">
                <div className="content">
                
                  {/*<!-- Contenedor de tarjetas -->*/}
                  <div className="grid grid-cols-3 grid-gap-3">
  
                    {
                      this.state.characters.map((char) => {
                        return < Card key={char.id} info={char} onDelete={this.deleteCard} />
                      })
                    }
  
                  </div>
                </div>
              </div>
            </div>
            <button
            className='btn-link outline u-center' 
            onClick={() => this.addCards()}
            >
              More Cards
            </button>
            <div
            style = {{height: '60px'}}
            ></div>
          </section>
        </main>
        <footer
        style={{height: '28px', backgroundColor: 'darkgray', paddingLeft: '15px', 
          position: 'fixed', left: '0', bottom: '0', width: '100%', color: 'white'
        }}
        >
          <p>
            Pedro Fraguas
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
