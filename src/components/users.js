import React from "react";
import {connect} from "react-redux";
import {showUsers} from "../actions";

class Users extends React.Component{
    componentDidMount() {
      //this.props.showUsers();
    }
    render(){
       let users= this.props.users;
       if(users){
           return (
               <div>
                   loading:{this.props.loading+""}
                   {users.map((v,index)=>{
                       return <li key={index}>{v.name}:{v.age}</li>
                   })}
               </div>
           )
       }
       return (<div>null</div>);
   }
}
function mapStateToProps(state,props){
    console.log("state",state);
    console.log("props",props);
  return props;
}

function mapDispatchToProps(dispatch,props){
    console.log("mapDispatchToProps",dispatch);
  return {
      showUsers:()=>{dispatch(showUsers())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);