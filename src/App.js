import Card from './components/Card'
import data from './rickandmorty.json'

function App() {
  return (
    <div className="App">
      <header>
        <h2>Rick & Morty Characters</h2>
      </header>
      <main>
        <section class="section" style={{'background-color': '#FBF8F3;'}}>
          <div class="hero">
            <div class="hero-body">
              <div class="content">
                
                {/*<!-- Contenedor de tarjetas -->*/}
                <div class="grid grid-cols-3 grid-gap-3">

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

export default App;
