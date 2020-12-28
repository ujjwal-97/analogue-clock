import {useEffecr, useEffect, useRef} from 'react';

export const useInterval = (callback, delay) =>{
    const savedCallback= useRef
    useEffect(()=> {
        savedCallback.current = callback
    },[callback])

    
}