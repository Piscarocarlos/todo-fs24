import { collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config';

export const ListTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Get all data from collection tasks
        onSnapshot(collection(db, "tasks"), (snapshot) => {
            setTasks(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })));
        })
    }, [tasks])



    async function updateTask(id) {
        const taskRef = doc(db, "tasks", id);
        await updateDoc(taskRef, {
            isFinished: true
        })
    }

    async function deleteTask(id) {
        const taskRef = doc(db, "tasks", id);
        await deleteDoc(taskRef)
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8 offset-md-2">
                        {
                            tasks.map((task, key) => {
                                return <div className="card my-3" key={key}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 style={{ textDecoration: task.isFinished ? "line-through" : "" }}>{task.name}</h6>
                                            <div className="button">
                                                <button className="btn btn-success me-3" onClick={() => updateTask(task.id)}>
                                                    Finish
                                                </button>
                                                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
