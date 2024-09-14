import RecipeContext from "../context/RecipeContext";
import CardItem from "./CardItem";
import React, { useContext } from 'react'
export default function Card() {
    const context = useContext(RecipeContext);
    const { AllRecipes } = context;
    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-3">
                {AllRecipes && AllRecipes.map((item, key) => (
                    <div className="col mb-4">
                        <CardItem Recipe={item.recipe} key={key} />
                    </div>
                ))}
            </div>
        </div>
    )
}
