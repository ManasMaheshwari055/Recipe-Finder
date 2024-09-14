import { useReducer } from "react"
import RecipeContext from './RecipeContext'
const initialState = {
    AllRecipes: [],
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_RECIPES':
            return {
                ...state,
                AllRecipes: action.payload
            }
        default:
            return state;
    }
}
const RecipeState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <RecipeContext.Provider value={{AllRecipes: state.AllRecipes, dispatch }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeState
