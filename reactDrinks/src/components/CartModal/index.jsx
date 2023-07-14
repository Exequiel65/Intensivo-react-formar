import styles from "./CartMode.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";

export default function CartModal() {
    const { isOpen, toogleModal } = useModal();
    const { cart, addToCart, removeOneFromCart, removeAllFromCart, clearCart } = useCart();
    
    if (!isOpen) {
        return (<></>)
    }
    return (
        <div className={styles.modalBg} onClick={toogleModal}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toogleModal} />
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinksListContainer}>
                        {/* Lista de productos */}
                        {
                            cart.cartItems.map((drink)=> (
                                <article key={drink.idDrink} className={styles.card} >
                                    <img 
                                        src={drink.strDrinkThumb} 
                                        alt={drink.strDrink} 
                                    />
                                    <span>{drink.strDrink}</span>
                                    <span>{drink.price}</span>
                                    <div className={styles.counter}>
                                        <button onClick={()=> removeOneFromCart(drink.idDrink)}> - </button>
                                        <span>{drink.quantity}</span>
                                        <button onClick={()=> addToCart(drink)}> + </button>
                                    </div>
                                    <FontAwesomeIcon onClick={() => removeAllFromCart(idDrink)} icon={faTrashAlt} className={styles.iconTrash} />
                                </article>
                            ))
                        }
                        
                    </div>
                    <aside className="">
                        {/*  */}
                        <p>Subtotal : XXXXXXX</p>
                        <p>Total : XXXXXXX</p>
                        <div className={styles.btnContainer}>
                            <button onClick={clearCart}className={styles.clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder}>Confirmar compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}

