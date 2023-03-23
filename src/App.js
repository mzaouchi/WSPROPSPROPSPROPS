import './App.css';
import Child from './Components/Child';

function App() {
  const name = "Alaya"
  var age  = 28
  var pays = ["Tunisia", "USA", "Italy"]
  var user = {name :"Alaya",age : 27, city :{cp : 8080}}
  var track = "Fullstack"
  const handleHello=()=> alert('Hello')
  const handleHi=(a)=> alert(`Hello ${a}`)
  const show = false
  return (
    <div>
      <h1>Workshop Props</h1>
      <Child name={name} age={age} pays={pays} user={user} track={track} handleHello={handleHello} handleHi={handleHi} show={show}>
        <h2>Iheb</h2>
        <img src='/logo192.png' alt='not found'/>
      </Child>
        
    </div>
  );
}

export default App;
