import React, {useEffect , useState} from "react";

const UseEffectCompo = () => {
    const [count , setCount] = useState(0);
    const [name , setName] = useState("manasa");

    useEffect(() => {
        console.log("welcome!!");
    }, [count, name]);

    return(
        <>
        <h1>use effect hooks</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>increment</button>
        <h1>{name}</h1>
        <button onClick={() => setName('EA25')}>click</button>
        </>
    )
}
export default UseEffectCompo;