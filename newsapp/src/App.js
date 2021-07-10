
import Tempapp from "./components/Tempapp";
import Newsapp from './components/Newsapp';
export default function App(){

  const ReturnOnlyLI = () => {
    return(
     <>
      <Tempapp />
      </>
    )
  }

  return(
    <div>
         <ReturnOnlyLI />
        <Newsapp /> 
       
    </div>
  );
}