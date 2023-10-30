import Link from "next/link";
import { useState, useEffect } from "react";
import {db} from '../firebase';
import { addDoc, collection, onSnapshot} from "firebase/firestore";

export default function AccounT(){
    const [no, setNo] = useState(false)
    const [Account, SetAccounts] = useState([])
    const [account, setAccount] = useState({
    title:""
    })

    async function handleSubmit(){
        const docRef = await addDoc(collection(db, "accounts"), {
            title: account.title
        })
        setAccount({title:""})
    }

    useEffect(() => {
         const unsubscribe = onSnapshot(collection(db, "accounts"), (snap) =>{
            SetAccounts(snap.docs.map(doc => {
                return{
                    id: doc.id,
                    title: doc.data().title 
                }
            }))
        })
        return unsubscribe

    }, [])


    return( 
    <div>
        <Link href= "/"><button>Go back</button></Link>
        <h1 className="box">{Account.map(acc => {
            return <div key = {acc.id}>{acc.title}</div>
        })}</h1>
        <div className="container">
            {no && <h1>No more</h1>}
            <input placeholder="Account" value={account.title} type='text' onChange = {(e) => setAccount({...account, title: e.target.value})}></input>
            <button onClick={handleSubmit}>Enter</button>
        </div>
    </div>
)}