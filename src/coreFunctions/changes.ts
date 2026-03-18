export function diff(prev:any,next:any){
    const changes: any = {};
    const keys = new Set([...Object.keys(prev || {}),...Object.keys(next || {})]);

    keys.forEach((key)=>{
        if(prev[key] !== next[key]){
            changes[key] = {
                prev:prev?.[key],
                next:next?.[key]
            }
        }
    })
    return changes;    
}