import { IoMdSearch } from "react-icons/io";
import HamBurger from '/hamburger.svg'
import { useContext, useState } from "react";
import axios from "axios";
import RecipeContext from "../context/RecipeContext";
export default function Navbar() {
    const [timeoutId, setTimeoutId] = useState();
    const context = useContext(RecipeContext);
    const { dispatch } = context;
    const fetchRecipe = async (searchString) => {
        const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=15d9baf7&app_key=992af503df3e20d0b54fc9e463f26ea2`)
        dispatch({
            type: 'SET_RECIPES',
            payload: response.data.hits
        })
    }
    const onTextChange = (e) => {
        clearTimeout(timeoutId)
        const timeout = setTimeout(() => fetchRecipe(e.target.value), 500);
        setTimeoutId(timeout);
    }
    return (
        <nav className="navbar border-bottom border-body p-4" style={{ backgroundColor: 'black' }}>
            <div className="d-flex align-item-stretch" >
                <img src={HamBurger} alt="hamburger" style={{ width: "6%" }} />
                <h2 style={{ color: 'white', marginLeft: '.5rem'}}>Recipe Finder</h2>
            </div>
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{
                        fontSize: '1.4rem',
                        background: 'white',
                        borderRight: 'none',
                        color: 'black'
                    }}><IoMdSearch /></span>
                    <input type="text" className="form-control" onChange={onTextChange} placeholder="Search Recipe..." style={{ width: '40rem', height: '3rem', borderLeft: 'none' }} />
                </div>
            </div>
        </nav >
    )
}
