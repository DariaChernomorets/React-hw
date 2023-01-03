import Card from './components/Card';
import './App.css';
// import Card from "./components/Card";
import CardNew from "./components/CardNew";

function App() {
  return (
    <div className="App">
        <Card></Card>

        <CardNew title={', Mister'} text={'Welcome to React'}></CardNew>
        <CardNew text={'Welcome to React'}></CardNew>
        <CardNew title={', Mister'} ></CardNew>
    </div>


  );
}

export default App;
