import React from "react"
import "./style/Cards.css"

function Cards (){
    return (

       <section className="Cards">
        <div className="Cards-container">
            <img src="././img/imgjs.png" alt="" />
            <ul className="list">
                <li> Fundamentos de la programación.</li>
                <li>Trabajar con Variables.</li>
                <li>Condicionales y Estructuras.</li>
            </ul>
            <button className="btn-cards">$57000</button>
        </div>
        <div className="Cards-container">
            <img src="././img/imghtml.ico" alt="" />
          
            <ul className="list">
                <li >Estructura básica de una página .</li>
                <li> Crear páginas web estáticas.</li>
                <li> Usar variedades de etiquetas.</li>
            </ul>
            <button className="btn-cards">$55000</button>
        </div>
        <div className="Cards-container">
            <img src="././img/imgcss.webp" alt="" />
            
            <ul className="list">
                <li> Hojas de estilo en cascada.</li>
                <li> Es un lenguaje basado en reglas.</li>
                <li>Da estilos al maquetado.</li>
            </ul>
            <button className="btn-cards">$45000</button>
        </div>
       </section>
   
    )
}

export default Cards