import Navbar from "./components/Navbar"
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
