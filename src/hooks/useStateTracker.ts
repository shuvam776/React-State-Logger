import { useEffect, useRef, useState } from "react";
import { logChange } from "../coreFunctions/logger";

export function useStateTracker(initial : any, name = "stateName") {
     const [state,setState] = useState(initial);
     const prevState = useRef(initial);

     useEffect(()=> {
      if(prevState.current !-= state){
          logChange(name,prevState,state);
      }
     },[state]);
     return [state,setState];
}
