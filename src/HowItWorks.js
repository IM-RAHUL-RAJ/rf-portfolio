import React,{useState} from "react";
import WorkApi from './API/workApi.js';



const HowItWorks=()=>{
    const [item,setItem]=useState(WorkApi);
    console.log(item);
    return (
        <>




        <section>
            <div className="work-container container">
            <h1 className="main-heading text-center">How we Work ?</h1> 
            <div className="row">
            {item.map((ele)=>{
                return( 
                    <>
                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${ele.logo}`}></i>
                <h2>{ele.title}</h2>
                <p>{ele.info}</p>

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

export default HowItWorks;