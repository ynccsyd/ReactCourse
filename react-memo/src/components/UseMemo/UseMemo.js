import React from 'react'

const UseMemo = () => {
  const [number, setNumber] = useState(0);
    return (
        <div className='App'>
            <Header />
            <hr />
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>İncrease</button>
        </div>
    )
}

export default UseMemo