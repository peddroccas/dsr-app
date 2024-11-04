import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useManager } from '@/hooks/use-manager'

export function Approved() {
  const { approvedCompletionsByManager, tasks } = useManager()

  if (!approvedCompletionsByManager?.length) {
    return (
      <div className="grid h-full gap-8 bg-venice-blue-900 p-8 rounded-md">
        <h1>Sem tarefas completadas</h1>
      </div>
    )
  }

  return (
    <div className="grid h-full gap-8 bg-venice-blue-900 p-8 rounded-md">
      <Table className="text-venice-blue-950 bg-slate-50 ">
        <TableHeader className="bg-ignara">
          <TableRow>
            <TableHead className="text-slate-50">GERENTE</TableHead>
            <TableHead className="text-slate-50">TAREFA</TableHead>
            <TableHead className="text-slate-50 text-center">
              DATA DE CONCLUSÃO
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {approvedCompletionsByManager.map(manager =>
            manager.completions.map(completion => {
              const task = tasks?.find(task => task.id === completion.taskId)
              const date = new Date(completion.completedAt)
              return (
                <TableRow key={manager.user.id}>
                  <TableCell className="font-medium">
                    {manager.user.name}
                  </TableCell>
                  <TableCell>{task?.title}</TableCell>
                  <TableCell className="text-center">
                    {date.toLocaleDateString('pt-BR')}
                  </TableCell>
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}
