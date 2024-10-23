import { useAuth } from '@/hooks/use-auth'
import { getManagers } from '@/services/http/get-managers'
import type { user } from '@/types'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'

export function ManagersTable() {
  const { token } = useAuth()
  const { data: managers, refetch } = useQuery<user[]>({
    queryKey: ['managers'],
    queryFn: async () => getManagers({ token }),
  })

  if (!managers) {
    return <></>
  }
  return (
    <TableContainer
      component={Paper}
      className="rounded-none bg-venice-blue-950 shadow-none"
    >
      <Table
        aria-label="managers table"
        className="rounded-2xl bg-venice-blue-900 "
      >
        <TableHead>
          <TableRow>
            <TableCell className="!text-ignara" align="left">
              Nome
            </TableCell>
            <TableCell className="!text-ignara" align="right">
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="">
          {managers.map(manager => (
            <TableRow
              key={manager.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{manager.name}</TableCell>
              <TableCell align="right">{manager.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
