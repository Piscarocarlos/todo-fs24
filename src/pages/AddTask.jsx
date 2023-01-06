import { useEffect, useState } from "react"

export default function AddTask() {

const [task, setTask] = useState("")

function handleChange(e){
    setTask(e.target.value)
}


  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-6 offset-md-3">
                <div className="card shadow">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="task">Tache à ajouter</label>
                                <input type="text" id="task" value={task} onChange={handleChange} className="form-control" placeholder="Ex: Jouer au foot" />
                            </div>
                            <div className="form-group mt-3">
                                <button className="btn btn-dark w-100">Add Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
