import { useContext } from "react"
import Card from "./Card"
import Default from "./Default"
import RecipeContext from "../context/RecipeContext"
export default function MiddleContainer() {
    const context = useContext(RecipeContext);
    const { AllRecipes } = context;

    return (
        <div>
            {AllRecipes.length==0 ? <Default/> : <Card/>}
        </div>
    )
}