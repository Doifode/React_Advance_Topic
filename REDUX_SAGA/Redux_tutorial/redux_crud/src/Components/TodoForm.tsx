import { useEffect, useState } from "react"
import { ITodos } from "../Constant/Interfaces"
import { useDispatch, useSelector } from "react-redux"
import { addTodos, callForTodos, deleteTodoItem, updateTodos } from "../Redux/Actions";

export const TodoForm = () => {
    const [todo, setTodo] = useState<any>();
    const states: any = useSelector((state: ITodos) => state);
    const [updateOption, setUpdateOption] = useState<boolean>(false);
    const [itemId, setItemId] = useState()
    const dispatch = useDispatch()

    const AddTodos = async () => {
        if (updateOption) {
            const val = { todo: todo, id: itemId }
            dispatch(updateTodos(val));
            dispatch(callForTodos())

        }
        else {
            dispatch(addTodos({ todo: todo }));
            dispatch(callForTodos())
        }
    }
    const deletetodos = (id: number) => {
        dispatch(deleteTodoItem(id))
        dispatch(callForTodos())
    }

    useEffect(() => {
        dispatch(callForTodos())
    }, [dispatch])

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column m-5">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <input type="text" placeholder="Add todo here...." value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button className="btn btn-warning btn-sm" onClick={() => AddTodos()}>Add Todo</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table  table-bordered table-hover mt-4">
                        <tbody>
                            <tr>
                                <th>Todo</th>
                                <th>Action</th>
                            </tr>
                            {
                                states && states.map((i: any) => <tr key={i.id}>
                                    <td>{i.todo}</td> <td><button className="btn btn-sm btn-success" onClick={() => { setTodo(i.todo); setUpdateOption(true); setItemId(i.id) }}>Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => deletetodos(i.id)}>Delete</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div >
    )
}
