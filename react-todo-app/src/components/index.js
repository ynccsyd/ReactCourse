import React, { useState, useEffect } from 'react'
import Header from './Header'
import List from "./List"
import Footer from "./Footer"


const Todos = () => {
    return (
        <div>
            <section className='todoapp'>
                <Header />
                <List />
            </section>
            <Footer />
        </div>

    )
}

export default Todos
