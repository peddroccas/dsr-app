import TaskTabs from './components/task-tabs'
import { ManagerProvider } from '@/contexts/manager-context'

export function ManagersTasks() {
  return (
    <ManagerProvider>
      <div>
        <TaskTabs />
      </div>
    </ManagerProvider>
  )
}
