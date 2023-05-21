import React from "react";
import WebseriesAppCard from "./Components/WebseriesAppCard";
import "./Style_Webseries.css";
import Sdata from "./Sdata";


function WebseriesApp(){

    return (
        <>
       <h1 className="heading_style"> List of top 3 Netflix Series </h1>
       {Sdata.map((val)=> {
        return (
        <WebseriesAppCard
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}

        />

    );
       })}
       

        
        </>
    );
}



export default WebseriesApp;