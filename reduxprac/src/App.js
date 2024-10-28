import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Box from "./component/Box.js"

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const increase  = () => {
    dispatch({type:"INCREMENT"})
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increase!</button>
      <Box></Box>
    </div>
  );
}

export default App;
