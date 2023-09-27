import logo from './logo.svg';
import './App.css';
const[name,setName]=useState('');
const[greeting,setGreeting]=useState('');

const handleChange=(e)=>{
  setName(e.target.value);
}

const handSubmit=(e)=>
{
  e.preventDefault();
  setGreeting('Hello, ${name}');
}
function App() {
  return (
    <div className="App">
    <div className="contents">
    <h2>Hey!!! Greeting</h3>
    <form onSubmit

    </div>
  );
}

export default App;
