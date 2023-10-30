import { useEffect, useState } from "react";

export default function DoubleAdd(){
    const [num1, setNum1] = useState(Math.floor(Math.random()*90+10));
    const [num2, setNum2] = useState(Math.floor(Math.random()*90+10));
    const [num3, setNum3] = useState([0,Math.ceil(Math.random()*10),-1*Math.ceil(Math.random()*10),Math.ceil(Math.random()*20+10),-1*(Math.ceil(Math.random()*10+10))])
    useEffect(() =>{
        setNum3(prevChange => prevChange.sort((a,b)=>Math.random()-0.5))
    },[num1])
    async function getServerSideProps(){
      setNum1(Math.floor(Math.random()*90+10))
      setNum2(Math.floor(Math.random()*90+10)) 
    }
    return(
        <div className="beige container column">
            <div className="box column">
                <div className="double top-number">{num1}</div>
                <div className="double bottom-number">+{num2}</div>
            </div>
            <div className="box">
                <button className="help" onClick={getServerSideProps}>Step by step</button>
            </div>
            <div className="box">{num3}</div>
        </div>
    )
}