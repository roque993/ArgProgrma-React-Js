import "./style/Main.css"
function Main () {
    return (
    <>
    <h1>Aprendiendo a Programar</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, culpa.</p>
    
    <form action="">
        <label htmlFor="">Nombre y Apellido</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <select name="" id="">
            <option value="">JavaScrip</option>
            <option value="">HTML5</option>
            <option value="">CSS3</option>
        </select>
        <textarea name="" id="" cols="30" rows="10">Mensaje</textarea>
        <button>Eviar mensaje</button>
    </form>
    
    <div>
    <img src="././img/Img1.svg" alt="img de la pàgina" />
    </div>
    </>
    )
}

export default Main;