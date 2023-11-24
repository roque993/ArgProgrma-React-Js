
import "./style/Main.css"



function Main() {



    return (
        
        <div className="container-principal">
            <div className="container-form">
                <h1 className="title">Aprendiendo a Programar</h1>
                <p className="subtitle">Aprenda a diseñar y crear páginas web. Construya una cartera web receptiva y accesible utilizando HTML5, CSS3 y JavaScript</p>

                <form className="form" action="">

                    {/* nombre */}
                    <div className="form-input">
                        <label htmlFor="nombre">Nombre y Apellido</label>
                        <input className="input-container" 
                        type="text" 
                        name="nombre"
                        required

                        />
                    </div>

                    {/* email */}
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input className="input-container" 
                        type="text" 
                        required 
                        autoComplete="email"
                        />
                    </div>

                    <div className="form-input">
                        <label htmlFor="cursos"> Cursos disponibles</label>
                        <select name="" id="select">
                            <option value="javascrip">JavaScrip</option>
                            <option value="html5">HTML5</option>
                            <option value="css3">CSS3</option>
                        </select>
                    </div>
                    <div className="form-input">
                        <label htmlFor="">Dejanos tu consulta</label>
                        <textarea id="text-mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    </div>

                    <button className="btn">Eviar mensaje</button>
                </form>
            </div>


            <div className="img-container">
                <img className="img-principal" src="././img/img1.png" alt="img de la pàgina" />
            </div>
        </div>
        
    ) 
   
}



export default Main;