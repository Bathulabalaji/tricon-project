import {React, useState } from "react";

const MyButton = () => {
    const [count,setCount]=useState(0);
    return ( 
        <>
            <p>You clicked {count} times</p>
            <button onClick={()=>{
                count=count+1
                setCount(count)}}>Click Me</button>
        </>
     );
}
 
export default MyButton;