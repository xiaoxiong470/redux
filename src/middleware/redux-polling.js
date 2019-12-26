import setRafTimeout,{clearRadTimeout} from "setRafTimeout"

export default ({dispatch,getState})=>next=>action=>{
    const {rollingUrl,types}=action;
    let isRolling=rollingUrl&&types;
    if(!isRolling){
        next(action);
    }

   function startRolling(timeout=0){
        let timeoutId=setRafTimeout(()=>{
            dispatch({
                url:rollingUrl,
                types
            }).then(data=>{
                startRolling(data.interval*1000);
            })
        },timeout)
    }
    startRolling();
}