import styles from "./CartMode.module.css"


export default function CartModal() {
  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <i>X</i>
            <h2>Mi Carrito</h2>
            <section className={styles.modalBody}>
                <div className={styles.modalDrinksListContainer}>
                    {/* Lista de productos */}
                    <article >
                        <img src="" alt="" />
                        <span>Nombre</span>
                        <span>Precio</span>
                        <div className={styles.counter}>
                            <button> - </button>
                            <span>Cantidad</span>
                            <button> + </button>
                        </div>
                    </article>
                </div>
                <aside className="">
                    {/*  */}
                </aside>
            </section>
        </div>
    </div>
  )
}

