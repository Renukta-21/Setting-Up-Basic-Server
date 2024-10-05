import { useState } from "react"

function App() {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    const objForm={
      name, number
    }
    setContacts(prevContacts=> prevContacts.concat(objForm))
    setName("")
    setNumber("")
  }
  return (
    <div>
      <h3>PhoneBook App</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><input type="text" id="name" value={name} onChange={e=>setName(e.target.value)}/>
        <br />
        <label htmlFor="number">Number:</label><input type="text" id="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        <br />
        <button type="submit">Add</button>
      </form>
      <h3>Numbers</h3>
      {contacts.map((cont, index)=>{
        return(
          <div key={index}>
            <p>Name:  {cont.name}</p>
            <p>Number:{cont.number}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App