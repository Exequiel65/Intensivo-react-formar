import {Modal, Image} from "react-bootstrap";
import {useDrinks} from "../../hooks/useDrinks";


export default function DrinkDetailModal(){
    const { modal, handleModalClick, Recipe, Loading  } = useDrinks();


    function showIngredients() {
        let ingredients = [];
        for (let index = 1; index < 16; index++) {
           if(Recipe[`strIngredient${index}`]){
                ingredients.push(
                    <li key={index}>
                        {Recipe[`strIngredient${index}`]}
                        {Recipe[`strMeasure${index}`]}
                    </li>
                )
           }
            
        }

        return ingredients
    }

    console.log(modal)
    console.log(!Loading)
    return (

        !Loading && (
            <Modal show={modal} onHide={handleModalClick}>
              <Image
                src={Recipe.strDrinkThumb}
                alt={`Imagen receta ${Recipe.strDrink}`}
              />
              <Modal.Header>
                <Modal.Title>{Recipe.strDrink}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="p-3">
                  <h2>Instrucciones</h2>
                  {Recipe.strInstructions}
                  <h2>Ingredientes y Cantidad</h2>
                  {showIngredients()}
                </div>
              </Modal.Body>
            </Modal>
          )
    )
}