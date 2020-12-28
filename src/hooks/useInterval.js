import {useEffect, useRef} from 'react';

export const useInterval = (callback, delay) =>{
    
    // last callback
    const savedCallback= useRef()
    useEffect(()=> {
        savedCallback.current = callback
    },[callback])

    // interval manage
    useEffect(() =>{
        const tick = () =>{
            savedCallback.current()
        }
        if(delay !==null){
            let id= setInterval(tick, dealy);
            return ()=> clearInterval(id)
        }
    }, [delay])

}