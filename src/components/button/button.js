import React,{useContext} from 'react';
import './style.scss';
import { AppContext } from "../../context/appContext";

function Button(props){
  const {text,marquee=true,direction="left",onclick} = props;
  const [state,setState] = useContext(AppContext);

  return(
    <>
    <div className="Button" style={{textShadow: state.madnessLevel > 2 && '3px 1px pink', border: '1px solid rgba(0,0,0,'+ (1 - state.madnessLevel*0.18).toString() +')'}}>
    {state.madnessLevel <= 4 && (<span onClick={() => onclick()}>{text}</span>)}
    {state.madnessLevel > 4 && (<marquee direction={direction} onClick={() => onclick()}>{text}</marquee>)}

    </div>
    </>

  )
}

export default Button;
