import React from "react";
import Value from "../Value/Value";
import "./Fstbox.css";


const ValueName= () =>{
    const EmployeeList =[
        {name:"Prabhu", work:"Infoview", no:"+91 94489 54239", mail:"naanuprabhu@gmail.com", website:"www.prabhu.com", place:"Chennai"},
        {name:"Vignesh", work:"Capillary", no:"+91 78902 29565", mail:"vignesh.gobitbyte@gmail.com", website:"www.vignesh.com", place:"Namakkal"},
        {name:"Indhu", work:"Episource", no:"+91 92345 78029", mail:"indumathis1612@gmail.com", website:"www.indhu.com", place:"Musiri"},
        
        {name:"Anto", work:"Php", no:"+91 80789 79026", mail:"antoajith2103@gmail.com", website:"www.Anto.com", place:"Chennai"},
        {name:"Saranya", work:"CS", no:"+91 69080 04946", mail:"saranyasomu@gmail.com", website:"www.Saran.com", place:"Salem"},
        {name:"Ajitha", work:"ECE", no:"+91 78090 26890", mail:"ajithaveerappan@gmail.com", website:"www.ajitha.com", place:"Palani"},
        {name:"Yogesh", work:"Saranath", no:"+91 67870 29046", mail:"yogesh1571572gmail.com", website:"www.yogesh.com", place:"Trichy"},
        {name:"Priya", work:"Kissflow", no:"+91 96780 34726", mail:"anbazhagan2709@gmail.com", website:"www.priya.com", place:"Karur"},
    ]
    return(
        <div className="Top" >
            {
                EmployeeList.map((details) =>{
                const {name, work, no, mail ,website, place}= details;
                return <Value name={name} work={work} no={no} mail={mail} website={website} place={place}/>;
                }) 
            }
        </div>
    );
};
export default ValueName;
