import React from 'react'
import {FcHome, FcAddRow} from "react-icons/fc"
import {BsBook, Bs} from "react-icons/bs"
import {FaAmazonPay} from "react-icons/fa"
const Icons = () => {
  return (
    <div>
        <FcHome style={{ fontSize : "3rem", color: "blue" }}/>
        <BsBook style={{ fontSize : "3rem", color: "blue" }}/>
        <FcAddRow style={{ fontSize : "3rem", color: "blue" }}/>
        <FaAmazonPay/>
    </div>
  )
}

export default Icons