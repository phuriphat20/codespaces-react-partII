import { useState,useEffect } from "react";

function Item({ name, isPacked }) {
    return (
        <li>
            {name} {isPacked && '✔'}
        </li>
    );
}

export default function ItemList(){
    const [keyword,setKeyword]=useState("");

    useEffect(()=>{
        console.log("this component is Loaded! ")

        return()=>{
            alert("component Unloaded! ")
        }
    },[])


    const items = [{name:"Sunglass",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Powerbank",isPacked:false},
        {name:"Towel",isPacked:false}

    ];
    const fillter=items.filter(i=>i.name.toLowerCase().includes(keyword.toLowerCase()))
    const itemList=fillter.map(i=><Item key={i.name} 
        name={i.name} isPacked={i.isPacked}/>);

    return (<>
    <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
    <ui>
        {itemList}
    </ui></>);
}