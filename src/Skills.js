import React,{useState} from 'react'
import SkillApi from './API/SkillApi.js'

const Skills=()=>{

    const [item,setItem]=useState(SkillApi);
    console.log(item);
return (
    <>
    <section className="service-main-container">
        <div className="container service-container">
            <h1 className="main-heading text-center fw-bold">
                Skills
            </h1>
            <div className="row">

            {item.map((ele)=>{
                return (
                    <>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                    <i className={`fontawesome-style ${ele.logo}`}></i>
                    <h2  className="sub-heading">{ele.title}</h2>
                    <p className="main-hero-para">{ele.info}</p>
                </div>

                    </>
                )
            })}
             
            </div>
        </div>
        
    </section>

    </>
)


}


export default Skills;