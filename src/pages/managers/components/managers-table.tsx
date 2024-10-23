import { useManager } from '@/hooks/use-manager'
import {
  TableHeader,
  TableColumn,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@nextui-org/react'
import ToolBar from './toolbar'

export function ManagersTable() {
  const { managers } = useManager()
  if (!managers) {
    return <></>
  }
  return (
    <Table
      classNames={{
        wrapper: 'bg-venice-blue-900',
        th: 'bg-slate-300 !text-venice-blue-950',
        base: 'rounded-xl shadow shadow-black !text-slate-50 text-montserrat',
        tbody: '!rounded-xl',
      }}
    >
      <TableHeader>
        <TableColumn>NOME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn align="center">AÇÕES</TableColumn>
      </TableHeader>
      <TableBody>
        {managers.map(manager => (
          <TableRow key={manager.id} className="">
            <TableCell>{manager.name}</TableCell>
            <TableCell>{manager.email}</TableCell>
            <TableCell>
              <ToolBar manager={manager} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
