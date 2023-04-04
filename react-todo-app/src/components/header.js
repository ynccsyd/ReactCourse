import React from 'react'
import { useState, useEffect } from 'react'

const Header = () => {
    return (
        <div className='todoapp'>
            <header class="header">
                <h1>todos</h1>
                <form>
                    <input class="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
        </div>
    )
}

export default Header