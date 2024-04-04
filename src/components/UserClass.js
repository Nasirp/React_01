import React from 'react'

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          count: 0,
          count2: 1,
          
        };
        this.state={
          userInfo:{
            name : "Dummy",
            Location: "any",
          }
        }
       // console.log("this is child constructor");
    }

   async componentDidMount(){
  //  console.log("this is child mount ");
    const data = await fetch("https://api.github.com/users/nasirp");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo:json,
    });
   }

    render(){
      const {name,company,avatar_url} = this.state.userInfo;
    //  console.log("this is child render");
        // const {name, Location,contactUs} = this.props;
        const {count} = this.state;
        return(
    <div className='user_card'>
          <h1>Count : {count}</h1>
         <button onClick={()=>{
           this.setState({
            count: this.state.count+1,
            }   )
         }} >increase</button>
         <button onClick={()=>{
            this.setState({
           
              count: this.state.count-1,
            })
         }} >decrease</button>
         <img src={avatar_url}/>
        <h2>{name}</h2>
        <h3>{company}</h3>
        {/* <h4>{contactUs}</h4> */}
    </div>
        )
    }
}
export default UserClass;
