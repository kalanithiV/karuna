import { useEffect, useRef, useState, version } from "react";
import FirstComponent from "./firstComponent";
import SecondComponent from "./seconfComponent";  

export default function ConditionalRendering({items}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);  
    const [inner, setInner] = useState(false);  
    const [version,setVersion] = useState("")
    const [count,setCount]=useState(0)
    const inputRef = useRef()
    const textWrap = useRef("ples enter the filed")
    const people = [
        'karunakaran',
        'gypsy',
        'Mariyam',
      ];
      const handleInputChange = (e) => {
        setVersion(e.target.value)
      }

      const onSubmit =()=>{
    
        alert("varatta maamey")

      }
      const management = [{
        id: 0,
        name: 'lavanya',
        job: 'Backenddeveloper',
      }, {
        id: 1,
        name: 'chandru',
        job: 'tester',
      }, {
        id: 2,
        name: 'raam',
        job: 'frontend',
      } ];

const nextClick =()=>{
  inputRef.current.focus()
}
useEffect=()=>{
  inputRef()
}
      
    // let Template;
    // if (isLoggedIn) {
    //     Template = <FirstComponent />;
    // } else {
    //     Template = <SecondComponent />;
    // }


    // Another method

    // if (isLoggedIn) {
    //     return <FirstComponent />;
    // } else {
    //     return <SecondComponent />;
    // }

    const Increment = () =>{
// /      setCount(count+1)
      setCount(prev => prev+1)
    }
    const Decreament = () =>{
      setCount(count-1)
    }
    return (
        <>
            {isLoggedIn ? <FirstComponent /> : <SecondComponent />}
{inner && isLoggedIn ?<FirstComponent />:<SecondComponent /> }
{inner || isLoggedIn ?<FirstComponent />:<SecondComponent /> }


            <p>varatta maamey</p>  



            <h3>Rendering List</h3>
            <ul>
                {
                    people.map((list,index) =>(
                        <>
                        <li key={index}>{list}</li>
                        </>
                    )
                )
                }
            </ul>
<ul>           {management.map((member,index) => (

                <li key={index}>{member.name + member.job}</li>
                // < key={index.id}> 
                //     <p>{member.name}</p>
                //     <p>{member.job}</p>
                // </div>
            ))}

            <button onClick={onSubmit}>Click</button>
            <input type="text"  value={version} onChange={handleInputChange}  />
            {version}
            </ul>
 <button onClick={Increment}>Increament</button>
 <button onClick={Decreament}>Decreament</button>

 <input type="text" ref={inputRef} />
 <button onClick={nextClick}>next</button>

{count}
<p>{textWrap.cu}</p>
        </>
    );
}