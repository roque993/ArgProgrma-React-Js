
import "./style/Main.css"
import { useState } from "react";



function Main() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    curso: "javaScrip, HTML5, CSS3",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.
      newErro
    nombre = "Campo requerido";
    }

   

    if (!formData.email.trim()) {
      newErrors.email = "Campo requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingrese un correo electrónico válido";
    }
    

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Mensaje enviado:", formData);

      setMessage(true);

      setFormData({
        nombre: "",
        email: "",
        curso: "javaScrip, HTML5, CSS3",
        mensaje: ""
      });


      setTimeout(() => {
        setMessage(false);
      }, 5000);
    }
  };


  return (
    <>
      <section id="contacto">
        <div className="container-principal">

          <div className="container-form">
            <h1 className="title">Aprendiendo a Programar</h1>
            <p className="subtitle">Aprenda a diseñar y crear páginas web. Construya una cartera web receptiva y accesible utilizando HTML5, CSS3 y JavaScript</p>


            <form className="form" onSubmit={handleSubmit}>
              {/* nombre */}
              <div className="form-input">
                <label htmlFor="nombre">Nombre y Apellido</label>
                <input
                  className={`input-container ${errors.nombre ? 'error' : ''}`}
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required

                />
                 {errors.nombre && <p className="error-message">{errors.nombre}</p>}
              </div>

              {/* email */}
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input
                  className={`input-container ${errors.email ? 'error' : ''}`}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                 {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              <div className="form-input">
                <label htmlFor="cursos"> Cursos disponibles</label>
                <select
                  name="curso"
                  id="select"
                  value={formData.curso}
                  onChange={handleChange}>

                  <option value="javascrip">JavaScrip</option>
                  <option value="html5">HTML5</option>
                  <option value="css3">CSS3</option>
                </select>
              </div>
              <div className="form-input">
                <label htmlFor="text-mensaje">Dejanos tu consulta</label>
                <textarea
                  className={`input-container ${errors.mensaje ? 'error' : ''}`}
                  id="text-mensaje"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                  defaultValue={formData.mensaje}
                  onChange={handleChange}
                >
                   {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
                </textarea>
               

              </div>
              {message && <p className="message">¡Gracias! El mensaje ha sido enviado con éxito</p>}
              <button className="btn" type="submit">Eviar mensaje</button>


            </form>
          </div>
          <div className="img-container">
            <img className="img-principal" src="././img/img1.png" alt="img de la pàgina" />
          </div>
        </div>


      </section>
    </>
  )

}



export default Main;