import { FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import "./style/Footer.css"

function Footer() {
    return (
        <section id="contacto">
            <footer>
                <ul>
                    <li><FaPhoneAlt /> </li>
                    <p>Tel: 1134564356</p>
                    <li><FaInstagram /></li>
                    <p>AprendiendoaProgramar</p>
                    <li><FaFacebook /> </li>
                    <p>AprendiendoaProgramar</p>
                </ul> 
            </footer>
         </section>

    )
}

export default Footer