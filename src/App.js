import './App.css';
import { First } from './MyComponents/First';
import { Second } from './MyComponents/Second';
import { Third } from './MyComponents/Third';

function App() {
  return (
    <div className="App">
      <p style={{
        marginTop: -60,
        marginLeft: -90,
        fontSize: 9
      }}>Move the cursor over the name of the places</p>
      <First />
      <Second />
      <Third />
    </div>
  );
}

export default App;
