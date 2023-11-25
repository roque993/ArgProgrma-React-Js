import "./style/Header.css"

function Header  () {
    
    return (
     <>
   <div className='title-container'>
    <header>
      <img className="icono-header"src="././img/ico1.png"  alt="" />
    <nav>
    <ul>
      <li><a href="#inicio" class= "nav-enlace">Inicio</a></li>
      <li><a href="#cursos" class= "nav-enlace">Cursos</a></li>
      <li><a href="#contacto" class= "nav-enlace">Contacto</a></li> 
      </ul>
    </nav>
      
    </header>
    
   </div>
  </>
    )
}



export default Header;