import './App.css';
import Header from 'components/Header.js';
import Season from 'components/Season.js';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='season-list'>
        <Season />
      </section>
    </div>
  );
}

export default App;
