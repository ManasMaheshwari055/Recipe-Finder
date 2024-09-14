import './App.css'
import MiddleContainer from './components/MiddleContainer'
import Navbar from './components/Navbar'
import RecipeState from './context/RecipeState'
function App() {
  return (
    <>
      <RecipeState>
        <Navbar />
        <MiddleContainer/>
      </RecipeState>
    </>
  )
}
export default App
