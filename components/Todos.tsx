import React from 'react'
import { type ListOfTodos, type TodoId, type Todo as TodoType } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleCompletedTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompletedTodo }) => {
  return (
        <ul className='todo-list'>
            {todos.map((item) => (
                <li
                    key={item.id}
                    className={`${item.completed ? 'completed' : ''}`}
                >
                    <Todo
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        completed={item.completed}
                        onToggleCompletedTodo={onToggleCompletedTodo}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
  )
}
