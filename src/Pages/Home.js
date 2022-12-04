import React, {useState} from "react";
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  const[context, setContext] = useState("")
  const Capitalize = () =>{
    setContext((oldContext) => oldContext.toUpperCase())
  }
  const LowerCase = () =>{
    setContext((oldContext) => oldContext.toLowerCase())
  }

  const capFirstChar = () => {
    setContext ( (oldContent) => {
    const str = oldContent.split (" ") ;
    const capfirst = str.map (e => e[0].toUpperCase () + e.slice (1).toLowerCase () ) ;
    return capfirst.join(" ")
    })
  }

  const copy = () => {
    navigator.clipboard.write(context)
  }

  const wordCount = () => {
  }

  return (
    <div className="App">
        <Navbar/>
        <div className="home">
            <textarea
            onChange={(e) => {setContext(e.target.value); console.log(context)}} 
            value={context}
            cols="132"
            rows="30"
            placeholder="pliz apna text enter kariye">
            </textarea>
            <div className='btn-arp'>
              <button onClick={Capitalize}>CAPITALIZE ALL TEXT</button>
              <button onClick={LowerCase}>lower case all text</button>
              <button onClick={capFirstChar}>Captilize First Character</button>
              <button onClick={copy}>Copy text to clipboard</button>
              <button>charecter count: {context.length}</button>
              <button onClick={copy}>word count: {context.length > 1 ? context.split(" ").length : "0"}</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
