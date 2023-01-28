import { useState, useEffect } from 'react'
import List from "./List"
import Form from "./Form"

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Ali",
      phone_number:"1236"
    },
    {
      fullname:"Veli",
      phone_number:"6321"
    },
    {
      fullname:"Ayşe",
      phone_number:"7989"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts