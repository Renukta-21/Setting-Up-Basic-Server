import { useState } from "react"

function App() {
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)
  const [editingReg, setEditingReg] = useState({name:'', number:''})

  function handleDelete(index) {
    setContacts(prevContacts => {
      return (prevContacts.filter((c, idx) => idx !== index))
    })
  }
  function handleUpdate(index) {
    setEditingIndex(index)
    setEditingReg({name:contacts[index].name, number:contacts[index].number})
    if (index === editingIndex) {
       setContacts(prevContacts=>{
        const newList = prevContacts
        newList[index] = editingReg
        return newList
      })
      setEditingIndex(null)

    }

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const objForm = {
      name, number
    }
    setContacts(prevContacts => prevContacts.concat(objForm))
    setName("")
    setNumber("")
  }
  return (
    <div>
      <h3>PhoneBook App</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <label htmlFor="number">Number:</label><input type="text" id="number" value={number} onChange={e => setNumber(e.target.value)} />
        <br />
        <button type="submit">Add</button>
      </form>
      <h3>Numbers</h3>
      {contacts.map((cont, index) => {
        return (
          <div key={index}>
            <small>{index}</small>
            {editingIndex === index ?
              <div>
                <label htmlFor="nameUpd">Name:</label>
                <input type="text" id="nameUpd" value={editingReg.name} 
                onChange={e=>{
                  setEditingReg(prevData=>({...prevData,name:e.target.value}))
                }}/>
                <br />
                <label htmlFor="numbUpd">Number:</label>
                <input type="text" id="numbUpd" value={editingReg.number}
                onChange={e=>{
                  setEditingReg(prevData=>({...prevData,number:e.target.value}))
                }} />
              </div>
              : <div>
                <p>Name:    {cont.name}</p>
                <p>Number:  {cont.number}</p></div>}
            <br />
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleUpdate(index)}>{editingIndex === index ? 'Done' : 'Edit'}</button>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App