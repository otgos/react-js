import { Component } from "react";


class ClassComp extends Component{

    constructor(props){ //to receive props

        super(props); //props should send to parent to be notified

        //components local state data
        this.state = {
            message: "Hello World2",
            hour: 23,
            minute: 49
        }

    }

    componentDidMount(){
        console.log("Will be executed in initial load only")
        //codes like fetching from database
        //set timers
    }

    componentDidUpdate(prevProps, prevState){
        console.log("these codes will be rendered in each re-render / update")

        if(prevState.hour !== this.state.hour){
            console.log("will be re-rendered when hour gets updated")
        }

        if(prevState.minute !==this.state.minute){
            console.log("will be re-rendered when minute gets updated")
        }

    }

    componentWillUnmount(){
        console.log("Will be rendered when unmountnig from component")
    }

    render(){
        return <div>
            <h1>{this.state.message}</h1>
            <h2>{this.state.hour}:{this.state.minute}</h2>

            <button onClick={()=>this.setState({hour:15})}>Set Hour</button>
            <button onClick={()=>this.setState({minute: 30})}> Set Minute</button>

        </div>
    }
}
export default ClassComp;
