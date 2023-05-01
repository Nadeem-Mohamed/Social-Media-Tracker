import logo from './logo.svg';
import './App.css';

function App() {
  const names=[
    {name: "Nadeem", age: 17},
    {name: "Mohil", age: 16},
    {name: "Gurpal",age:  21}
  ]
  return (
    <div className="App">
      {names.map((details,key)=> {
       return <Group name={details.name} age={details.age}></Group>})}
    </div>
  );
}
const Group=(props) => {
  return(
    <div>
      
        {props.name}
        {props.age}
    </div>)
}
export default App;
