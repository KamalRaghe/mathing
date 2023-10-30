import { useState ,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

export default function Math(){
    const [rest ,setRest] = useState(false)
    const [count, setCount] = useState(0)
    const [add, setAdd] = useState(rest);
    const [minus, setMinus] = useState(rest);
    const [times, setTimes] = useState(rest);
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div className="beige menu">
            <h1 style={{marginLeft:'35px',paddingLeft:'15px',paddingTop:'15px', borderBottom: '2px solid black',width: '90px'}} data-aos="fade-down" data-aos-duration="3000" >Math</h1>
            
            <button onClick={() => {setAdd(setTimeout(() =>{!add},500)) ; setCount(1)}} className="topic" data-aos="fade-up-right" data-aos-duration="3000">Addition</button>
            {add && count === 1 &&<button className="sub-topic" data-aos="zoom-in" data-aos-duration="3000">Single digit addition</button>}
            {add && count === 1 && <Link href= 'doubleAdd'><button className="sub-topic" data-aos="zoom-in" data-aos-duration="3000">Double digit addition</button></Link>}
            
            <button onClick={() => {setMinus(setTimeout(() =>{!minus},500)) ; setCount(2)}} className="topic" data-aos="fade-up-right" data-aos-duration="3000">Subtraction</button>
            {minus && count === 2 &&<button className="sub-topic" data-aos="zoom-in" data-aos-duration="3000">Single digit subtraction</button>}
            {minus && count === 2 && <button className="sub-topic" data-aos="zoom-in" data-aos-duration="3000">Double digit subtraction</button>}

            <button onClick={() => {setTimes(setTimeout(() =>{!times},500)); setCount(3)}} className="topic" data-aos="fade-up-right" data-aos-duration="3000">Multiplication</button>
            {times && count === 3 &&<button className="sub-topic" data-aos="zoom-in" data-aos-duration="3000">Single digit multiplication</button>}
            {times && count === 3 && <button className="sub-topic" data-aos="zoom-in" data-aos-duration="3000">Double digit multiplication</button>}
        </div>     
    )
}