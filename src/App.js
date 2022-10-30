import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
     {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "May 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "May 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Food Shopping",
        "day": "May 7th at 12:30pm",
        "reminder": false
      }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? (<Tasks 
      tasks={tasks}
      onDelete={deleteTask}></Tasks>) : ('No tasks to show')}
    </div>
  )
}

export default App;
