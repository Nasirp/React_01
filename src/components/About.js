import React from 'react'
import UserClass from './UserClass'
import User from './User'
import UserContext from '../utils/UserContext';


class About extends React.Component{
  constructor(props){
    super(props);
  //  console.log("parent constructor")
  }

 componentDidMount(){
 // console.log("parent mount");
 }

  render(){
   // console.log("parent render")
    return(
      <div>
      <h1>About Class Component</h1>

      {/* access Context */}

      <div>
         loggedInUser
        <UserContext.Consumer>
          {({loggedInUser})=>(
            <h1 className='text-xl font-bold'>{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>


      <h2>this is nasir hussain</h2>
    {/* <User name={"Nasir hussain"} Location={"Kolkata"} contactUs={"nh246nasir@gmail.com"}/> */}
     <UserClass name={"Nasir Hussain"} Location={"Patna"} contactUs={"dhanuraja70@gmail.com"}/>


    </div>
    )
  }
}


  


export default About
