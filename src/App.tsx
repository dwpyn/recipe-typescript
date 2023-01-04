import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='search' element={<Search />} />
            <Route path='recipes/:id' element={<Recipe />} />
          </Route>

          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App