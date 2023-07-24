import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Todos } from '../components/Todos'
import { TODO_FILTERS } from '../consts'
import { type FilterValue, type TodoId, type Todo as TodoType } from '../types'

const mockTodos = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Learn IA',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChanged = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const filteredTodos = todos.filter((item) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !item.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return item.completed

    return item
  })

  return (
    <div className="todoapp">
      <Todos
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChanged={handleFilterChanged}
        onClearCompleted={() => {}}
      />
    </div>
  )
}

export default App
