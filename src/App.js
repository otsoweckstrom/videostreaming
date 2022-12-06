import './App.css';
import Header from './components/Header';

function App() {
  const [movieName, setMovieName] = useState('');

  const [review, setReview] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <label>Movie name:</label>
        <input type="text" name="movieName" />
        <label>review:</label>
        <input type="text" name="review" />
        <button>Submit</button>
      </header>
    </div>
  );
}

export default App;
