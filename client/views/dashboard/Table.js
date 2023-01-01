// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'



const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  review: { color: 'warning' },
  success: { color: 'success' }
}

const DashboardTable = ({data}) => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Mentor</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow hover  sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.mentor.mentor_name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.mentor.mentor_email}</TableCell>
                <TableCell>{`${row.taskDueDay + "-" + row.taskDueMonth}` + "-" + row.taskDueYear}</TableCell>
                <TableCell>{row.taskName}</TableCell>
                
                <TableCell>
                {
                      row.taskStatus === 0 ?  <button className={`bg-slate-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Assigned
                    </button> : ""

                    
                    }

{
                      row.taskStatus === 1 ?  <button className={`bg-yellow-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Review
                    </button> : ""

                    
                    }

{
                      row.taskStatus === 2 ?  <button className={`bg-red-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Rejected
                    </button> : ""

                    
                    }

{
                      row.taskStatus === 3 ?  <button className={`bg-green-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Success
                    </button> : ""

                    
                    }
                </TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
