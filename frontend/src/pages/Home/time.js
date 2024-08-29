import { useEffect, useState } from "react";

function Time(){
    const [time,setTime]=useState(new Date().toLocaleTimeString());
    function updateTime(){
        const newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
    useEffect(()=>{
        const timeInterval=setInterval(() => {
            updateTime();
        }, 1000);
        return ()=>clearInterval(timeInterval);
    },[]);
    return <p>Current time is : <b>{time}</b></p>;
}
export default Time;