import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react"
import { toast, Toaster } from "react-hot-toast";
import { db } from "../firebase.config";

export default function AddTask() {

    const [task, setTask] = useState("")

    function handleChange(e) {
        setTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        addDoc(collection(db, "tasks"), {
            name: task,
            isFinished: false
        })
        setTask('')
        toast("Votre tache a été ajouté avec succès", {
            position: "bottom-left",
            icon: "✅"
        })
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="task">Tache à ajouter</label>
                                    <input type="text" id="task" value={task} onChange={handleChange} className="form-control" placeholder="Ex: Jouer au foot" />
                                </div>
                                <div className="form-group mt-3">
                                    <button className="btn btn-dark w-100">Add Task</button>
                                </div>
                            </form>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
