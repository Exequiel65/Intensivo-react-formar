import { Row } from "react-bootstrap";
import {useDrinks}  from "../../hooks/useDrinks";
import DrinkCard from "../DrinkCard";

export default function DrinkList(){
    const { Drinks } = useDrinks();
    if (Drinks.length === 0) {
        return (
            <Row className="p-5 m-5">
                <h1 className="text-center">No hay resultado</h1>
            </Row>
        )
    }



    return(
        <Row className="mt-5 ">
            {
                Drinks.map(drink =>(
                    <DrinkCard drink={drink} key={drink.idDrink} />
                ))
            }
        </Row>
    )
}

