import React from "react";
import {connect} from "react-redux";
import {showUsers} from "../actions";

class Users extends React.Component{
    componentDidMount() {
      this.props.showUsers();
    }
    render(){
       let {users,loading,error}= this.props;
       //console.log("props",this.props);
       if(loading==true){
           return (
               <div>
                   {/*加上字符串可以显示*/}
                   loading:{loading+""}
               </div>)
       }else{
           //console.log("users", users);
           if(users){
               return (
                   <div>
                       {users.map((v,index)=>{
                           return <li key={index}>{v.name}:{v.age}</li>
                       })}
                   </div>
               )
           }else{
               return (<div>{error}</div>)
           }

       }
       return (<div>null</div>);
   }
}
function mapStateToProps(state,props){
    let newProps={...state.payLoad};
  return newProps;
}

function mapDispatchToProps(dispatch,props){
  return {
      showUsers:()=>{dispatch(showUsers())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);