import styles from "./CartMode.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import useModal from "../../hooks/useModal";
import { useEffect } from "react";

export default function CartModal() {
    const { isOpen} = useModal()
    if (!isOpen) {
        return (
            <></>
        )
    }
  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon}/>
            <h2>Mi Carrito</h2>
            <section className={styles.modalBody}>
                <div className={styles.modalDrinksListContainer}>
                    {/* Lista de productos */}
                    <article className={styles.card} >
                        <img src="https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg" alt="" />
                        <span>Nombre</span>
                        <span>Precio</span>
                        <div className={styles.counter}>
                            <button> - </button>
                            <span>22</span>
                            <button> + </button>
                        </div>
                        <FontAwesomeIcon icon={faTrashAlt} className={styles.iconTrash} />
                    </article>
                </div>
                <aside className="">
                    {/*  */}
                    <p>Subtotal : XXXXXXX</p>
                    <p>Total : XXXXXXX</p>
                    <div className={styles.btnContainer}>
                        <button className={styles.clearCart}>Vaciar carrito</button>
                        <button className={styles.confirmOrder}>Confirmar compra</button>
                    </div>
                </aside>
            </section>
        </div>
    </div>
  )
}

