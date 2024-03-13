import './App.css'
import { useState } from 'react'
import ReactDom from 'react-dom/client'

function App() {
    const [name, setName] = useState("Sofía")
    const [newName, setNewName] = useState("")
    const empty = document.getElementById('empty')

    const changeName = (e) => {
        e.preventDefault()
        newName.trim() !== ""
            ? (setName(newName), setNewName(''), empty.textContent = '')
            : empty.textContent = 'Empty imput!'
    }

    return (
        <div className="app-container">
            <h2>Teacher name: {name}</h2>
            <ul className="list">
                <li onClick={() => setName('Data')}>Data</li>
                <li onClick={() => setName('Reyes')}>Reyes</li>
                <li onClick={() => setName('Yolanda')}>Yolanda</li>
            </ul>

            <div id="empty"></div>
            <form onSubmit={changeName}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Add a name"></input>
                <button type="submit">Add</button>
            </form>

            <button className="resetBtn" onClick={() => { setName('Sofía'); empty.textContent = '' }}>Reset</button>
        </div>
    )
}

ReactDom.createRoot(document.getElementById('root')).render(<App />)
export default App