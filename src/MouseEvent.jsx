export default function MouseEvent(){
    return (<h1 onClick={e=>console.log("onMouseClick")}
    onMouseEnter={e=>console.log("onMouseEnter")}
    onMouseDown={e=>console.log("onMouseDown")}
    onMouseUp={e=>console.log("onMouseUp")}
    onMouseOver={e=>console.log("onMouseOver")}
    onMouseLeave={e=>console.log("onMouseLeave")}
    >Click Me</h1>) ;
}