import ReactDOM from "react-dom/client";
import Body from '././components/body';
const App =()=>{
  return (
     <Body /> 
);
}

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<App />); 