import { useRef } from "react";
import { logger } from "../coreFunctions/logger";
export const useRenderCount = (name: string) => {
    const count = useRef(0);
    count.current += 1;
    logger(`${name} Renders & it's Count`, count.current);
}