import React from 'react'
import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChanged: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  filterSelected,
  handleFilterChanged
}) => {
  return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters
                filterSelected={filterSelected}
                onFilterChanged={handleFilterChanged}
            />
        </footer>
  )
}
