import React,{useContext,useState} from 'react';
import './style.scss';
import { AppContext } from "../../context/appContext";
import Button from '../../components/button/button';
import ContextHelper from '../../context/contextHelper';
function App() {
  const [state,setState] = useContext(AppContext);
  const [test,setTest] = useState(1);


  const step_01 = (
    <>
    <Button text="I am in" onclick={() => ContextHelper.UpdateState(setState,state,{stepIndex: 1})} direction="right"/>
      <p>Use the slider to adjust the madness level!</p>
      <Button text="I am out" onclick={() => ContextHelper.UpdateState(setState,state,{stepIndex: 2})}/>
    </>
  );

  const step_02 = (
    <>
      <p>Awesome</p>
      <Button text="Go back" onclick={() => ContextHelper.UpdateState(setState,state,{stepIndex: 0})}/>


    </>
  );

  const step_03 = (
    <>
      <p>Bye</p>
    </>
  );

  const style = {border: '1px solid rgba(0,0,0,'+ (1 - state.madnessLevel*0.18).toString() +')',color: 'rgba(0,0,0,'+ (1 - state.madnessLevel*0.1).toString() +')',fontSize: (15 - state.madnessLevel*2).toString() + "pt"}

  const [steps,setSteps] = useState([step_01,step_02,step_03]);

  return (
    <div className="App">

      <div className="Headline">
      <div className="HeadlineMain">AMAZING UI</div>
      <input type="range" min={0} max={5} value={state.madnessLevel} onChange={(e) =>   ContextHelper.UpdateState(setState,state,{madnessLevel: e.target.value})}/>
      </div>

      <div className={state.madnessLevel > 2 ? "PlateWiggle" : "Plate"} style={style}>
        {steps[state.stepIndex]}
      </div>
    </div>
  );
}

export default App;
