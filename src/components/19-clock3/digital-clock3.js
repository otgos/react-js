import React, { useEffect, useState } from 'react'
import "./digital-clock3.scss"
import moment from 'moment'


const DigitalClock3 = (props) => {

    const [dateTime, setDateTime] = useState(moment())

    const timeStr = dateTime.format("HH:mm");
    //console.log(timeStr)
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.hour();

    const minute = dateTime.format("mm");
    const second = dateTime.format("ss");

    //console.log(hour);
    let message = "";
    if(hour >=6 && hour <11){
        message="Morning";
    }else if(hour>=11 && hour<14){
        message = "Noon";
    }else if(hour>=14 && hour<17){
        message = "Afternoon";
    }else if(hour>=17 && hour<22){
        message = "Evening";
    }else{
        message="Night"
    }
    const {bgColor, textColor} = props;
    const clockStyle ={
        color:textColor,
        backgroundColor : bgColor ,
    }

    console.log(timeStr)

    
    useEffect(() => {
        //this use effect will be rendered in initial load only
        const timer = setInterval(() => {
                setDateTime(moment())
        }, 1000);
    
      return () => {
        //codes will be running when we leave current component
        //UNMOUNTING
        clearInterval(timer);
        //interval we have started in initial will be stop when we leave
      }
    }, [])
    

    // 

  return (
    <div className='digital-clock' style = {clockStyle}>
        <div className='time'>{hour}<span style={{opacity:second%2===0 ? 1 : 0}}>:</span>{minute}</div>
        <div>
            <div className='date'>{dateStr}</div>
            <div className='day'>{dayStr} {message}</div>
        </div>
        
    </div>
  )
}

export default DigitalClock3