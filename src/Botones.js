import {useState, useEffect} from 'react';

function Botones() {

    const [num, setNum] = useState(0)

  return (

    <div className="h-screen flex flex-col items-center justify-center">
        <p>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={()=>setNum(num => num+1)}>+</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={()=>setNum(0)}>Reset</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={()=>setNum(num => num-1)}>-</button>
        </p>

        <p className="text-white">{num}</p>
      </div>

  );
}

export default Botones;