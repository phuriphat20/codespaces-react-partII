import { useRef, useState } from "react";

const BmiText=({bmi})=>{
    if(bmi<18.5)
        return(<h1>UnderWeight</h1>);
    if(bmi>30)
        return (<h1>OverWeight</h1>);
    return (<h1>Nomal</h1>);
}

export default function Bmi() {

    const W_input = useRef(null);  
    const H_input = useRef(null);  
    const [Bmi, setBMI] = useState(0); 

    const calBmi=()=> {
        const weight = W_input.current.value; 
        const height = H_input.current.value / 100;
        setBMI(weight/Math.pow(height,2))
    }

    return (
        <>
            <h3>BMI Calculator</h3>
            Weight: <input 
                type="text" 
                ref={W_input}/> Kg. <br/>
            Height: <input
                type="text" 
                ref={H_input}/> Cm. <br/>

            <button onClick={()=>calBmi()}>Calculate!</button><br/>
            Bmi value : {Bmi.toFixed(2)}
            <BmiText bmi={Bmi}/>
        </>
    );
    
}
