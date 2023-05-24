import React, { useState } from 'react'
import projects from "./Random";  


function RandomDisplay() {
    const [data, setData]= useState(projects)
    // const [count, setCount]=useState(0)

  return (
    <section>
        <div className="project">
            {projects.map((pro)=>{
                const {id, title,news}=pro
                return (<div className="pro" key={id}>
                    <h2>{title}</h2>
                    <h2>{news}</h2>
                </div>

                )


            })}
        </div>
    </section>
  )
}

export default RandomDisplay