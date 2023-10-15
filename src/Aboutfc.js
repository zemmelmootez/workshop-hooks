import React, { useRef, useState } from 'react'

function Aboutfc() {

    const [persons,setPerson]=useState([
        {name:"mootez",age:21},
        {name:"fatma",age:18},
        {name:"saber",age:20},
        {name:"ons",age:21}

    ])
    const R1=useRef()
    const R2=useRef()
    const  addPersone=()=>{

        setPerson([...persons,{name:R1.current.value,age:R2.current.value}])
    }
  return (
    <div>

    <div>
        <input ref={R1} type='text' placeholder='enter name'></input>
        <input ref={R2} type='text' placeholder='enter age'></input>
        <button onClick={addPersone}>+</button>
    </div>
        {persons.map(e=><div>
              <h1>{e.name} i'm {e.age}</h1>
            </div>
            )}
      
    </div>
  )
}

export default Aboutfc
