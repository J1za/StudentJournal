import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Skeleton } from '@mui/material';
import { useGetListStudentsQuery, useGetLessonsColumnsQuery, useGetLessonVisitsQuery, useRemovePassStudentMutation, useAddPassStudentMutation } from '@/store/studentJournal/studentJournal.api';

function VisitTable() {
    const { data: users, isLoading: isLoadingUsers } = useGetListStudentsQuery('');
    const { data: columns, isLoading: isLoadingColumns } = useGetLessonsColumnsQuery('');
    const { data: visits, isLoading: isLoadingLessonVisits, refetch: refetchLessonVisits } = useGetLessonVisitsQuery('');
    const [addPassStudent] = useAddPassStudentMutation()
    const [removePassStudent] = useRemovePassStudentMutation()
    const handlePassStudent = async (event: any, SchoolboyId: number, ColumnId: number) => {
        let dataUser = {
            Title: 'Н',
            SchoolboyId,
            ColumnId
        }
        if (
            event.target.textContent != null &&
            typeof event.target.textContent !== "undefined" &&
            event.target.textContent != ""
        ) {
            await removePassStudent(dataUser).unwrap()
            refetchLessonVisits()
        } else {
            await addPassStudent(dataUser).unwrap()
            refetchLessonVisits()
        }

    }
    return (
        <Paper sx={{ overflow: 'hidden', height: '80vh' }}>
            {!isLoadingUsers && !isLoadingLessonVisits && !isLoadingColumns ?
                <TableContainer sx={{
                    maxHeight: '80vh',
                    overflowX: 'hidden',
                    "&::-webkit-scrollbar": {
                        width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#C0DBEA",
                        borderRadius: 1
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#E9A178",
                        borderRadius: 1
                    }
                }}>
                    <Table sx={{ minWidth: 650 }} stickyHeader>
                        <TableHead>
                            <TableRow sx={{
                                "& th": {
                                    backgroundColor: 'rgb(190 198 255)'
                                }
                            }}>
                                <TableCell style={{ fontWeight: 700 }}>№</TableCell>
                                <TableCell align="center" style={{ fontWeight: 700 }}>Ученик</TableCell>
                                {columns?.Items?.map(({ Title }) => (
                                    <TableCell align="center" style={{ fontWeight: 700 }}>{Title}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.Items?.map(({ Id, FirstName, SecondName, LastName }) => (
                                <TableRow key={Id}>
                                    <TableCell component="th" scope="row">
                                        {Id}
                                    </TableCell>
                                    <TableCell align="center">{FirstName} {SecondName} {LastName}</TableCell>
                                    {columns?.Items?.map(({ Id: columnId, Title: columnTitle }) => (
                                        <TableCell
                                            sx={{
                                                transition: '.3s',
                                                "&:hover": {
                                                    backgroundColor: "#6161db",
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    transform: 'scale(1.15)'
                                                }
                                            }}
                                            align="center"
                                            key={columnId}
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handlePassStudent(event, Id, columnId)}
                                        >
                                            {visits?.Items?.filter(({ SchoolboyId, ColumnId }) => SchoolboyId === Id && ColumnId === columnId).map(({ Title }) => Title)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
                :
                <Skeleton width="100%" height='200%' style={{ transformOrigin: '0 0' }} />
            }

        </Paper >
    )
}

export default VisitTable