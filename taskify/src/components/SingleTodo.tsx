import React from 'react'
import { Todo } from '../model';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'

interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo: React.FC<Props> = ({todo,todos,setTodos}) => {
    return(
        <form className='todos-single'>
            <span className="todos-single-text">
                {todo.todo}
            </span>
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon">
                <AiFillDelete/>
            </span>
            <span className="icon">
                <MdDone/>
            </span>
        </form>
    )
}

export default SingleTodo