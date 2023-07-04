
import Footer from "../components/footer"
import Header from "../components/header"
import styles from "./MainLayout.module.css"
import { Container } from "react-bootstrap"
import PropTypes from "prop-types"

export default function MainLayout({children}) {
    return (
        <div className={styles.main}>
            <Header />
                {/* Componente Hijo a renderizar */}
                <Container className="mt-5">
                    {children}
                </Container>

            <Footer />
           
        </div>
    )
}

MainLayout.propTypes = {
    children : PropTypes.node.isRequired
}



