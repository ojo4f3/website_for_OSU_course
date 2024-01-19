import React, { useState } from "react";
import { IoChevronDownCircleSharp, IoAddCircleSharp } from 'react-icons/io5';


function ItemCount() {
    const [count, setCount] = useState(0);
    const more = () => setCount(count === 10 ? count : count + 1)
    const less = () => setCount(count === 0 ? 0 : count - 1)
    
    return (
        <>
            <IoChevronDownCircleSharp onClick={less} />
            <span>  {count}  </span>
            <IoAddCircleSharp onClick={more} />
        </>
    );
}

export default ItemCount;