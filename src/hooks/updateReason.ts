import { useState,useRef,useEffect } from "react";
import { logger } from "../coreFunctions/logger";
import { diff } from "../coreFunctions/changes";

export function updateReason(name:string,props:any) {
    const previousProps = useRef(props);
    
    useEffect(() => {
        const changes = diff(previousProps.current, props);
        if (Object.keys(changes).length > 0) {
            logger(`${name} props changed`, changes);
        }
        previousProps.current = props;
    })
}