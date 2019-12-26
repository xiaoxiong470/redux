import React from "react";
import {connect} from "react-redux";
import {showUsers} from "../actions";

class Users extends React.Component{
    constructor(props){
        super(props);
        //this.props.loading();
    }
    componentDidMount() {

        this.props.showUsers();

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render(){
        const {payload,loading,error}= this.props;
        let users=[];
        if(loading==false){
            if(payload.length>0){
                return (
                    <div>
                        {payload.map((v,index)=>{
                            return <li key={index}>{v.name}:{v.age}</li>
                        })}
                    </div>
                )
            }else{
                return (<div>{error}</div>)
            }
        }else{

            return (
                <div>
                    {/*加上字符串可以显示*/}
                    loading:加载中
                </div>)
        }

   }
}
function mapStateToProps(state,props){
    let newProps={...state};
   //console.log("newProps",newProps);
  return newProps;
}

function mapDispatchToProps(dispatch,props){
  return {
      showUsers:()=>{
         dispatch(showUsers());//promise
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);