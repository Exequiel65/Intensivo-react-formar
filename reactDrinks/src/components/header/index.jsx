import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Header.module.css"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import useModal from "../../hooks/useModal"

export default function Header() {
    const { toogleModal } = useModal()
    return (
        <header className={`py-5 ${styles.header}`}>
            <h1>Buscador de Bebidas</h1>
            <button onClick={toogleModal} style={{background: "none", border : "none" } }> 
                <FontAwesomeIcon icon={faCartShopping}  />

            </button>
        </header>
    )
}
