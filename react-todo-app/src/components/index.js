import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import List from './List'

function ToDo() {

    const [tasks, setTasks] = useState([
        {
            isChecked:true,
            taskName:'Learn JavaScript',
        },
        {
            isChecked:false,
            taskName:'Learn React',
        },
        {
            isChecked:false,
            taskName:'Have a life!'
        }
    ])
    const [filterTextValue, updateFilterValue] = useState('All');

    let filteredTasksList = tasks.filter((task) => {
        if(filterTextValue === 'All'){
            return task;
        }else if(filterTextValue === 'Active'){
            return task.isChecked===false
        }else{
            return task.isChecked === true;
        }
    })


    useEffect(() => {
      console.log(tasks)
    }, [tasks])

    const onFilterBtnClicked = (filterBtn) => {
        updateFilterValue(filterBtn);
    }
    
    const onDeleteSelectedValue = (deleteValue)=>{
        console.log(deleteValue,' main value')
        let itemsCopy = [...tasks]
        console.log(itemsCopy,'itemsCopy e atılan task listesi')
        itemsCopy.splice(deleteValue,1);
        console.log(itemsCopy,'splicedan sonra itemsCopy')
        setTasks(itemsCopy);
    }

    const onDeleteCompletedValues=()=>{
        const completedTasks = tasks.filter((task)=> !task.isChecked)
        setTasks(completedTasks);
    }

    return (
        <div>
            <section className="todoapp">
                <Header addTask={setTasks} tasks={tasks}/>
                <List tasks={filteredTasksList} deleteValueSelected={onDeleteSelectedValue}/>
                <Footer tasks={tasks} filterValueSelected={onFilterBtnClicked} clearCompleted={onDeleteCompletedValues}/>
            </section>

            
        </div>
    )
}

export default ToDo