import './App.css';
import Header from 'components/Header.js';
import Season from 'components/Season.js';
import Data from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='season-list'>
        {Data.map(item => (
          <Season 
          key={item.id}
          item={item}
          />
          )
        )}
      </section>
    </div>
  );
}

export default App;
