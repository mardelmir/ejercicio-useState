import './App.css'
import { useState } from 'react'

function App() {
    const [name, setName] = useState('Sofía')
    const [newName, setNewName] = useState('')
    const empty = document.getElementById('empty')

    const changeName = (e) => {
        e.preventDefault()
        newName.trim() !== ''
            ? (setName(newName), setNewName(''), empty.textContent = '')
            : empty.textContent = 'Empty imput!'
    }

    const resetApp = () => {
        setName('Sofía'); 
        setNewName('');
        empty.textContent = ''
    }

    return (
        <>
            <h2>Teacher name: {name}</h2>
            <ul className="list">
                <li onClick={() => setName('Data')}>Data</li>
                <li onClick={() => setName('Reyes')}>Reyes</li>
                <li onClick={() => setName('Yolanda')}>Yolanda</li>
            </ul>

            <form onSubmit={changeName}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Add a name"></input>
                <button type="submit">Add</button>
            </form>

            <div id="empty"></div>
            <button className="resetBtn" onClick={resetApp}>Reset app</button>
        </>
    )
}

export default App

// He comentado estas líneas porque en la consola del navegador salía un error que decía que estaba usando createRoot() 2 veces sobre el mismo elemento. He dejado solo el de main.jsx funcionando para corregirlo.

// import ReactDom from 'react-dom/client' // No me hace falta porque no lo uso aquí
// ReactDom.createRoot(document.getElementById('root')).render(<App />) // Línea que causaba el error