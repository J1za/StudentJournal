import { Card, Box, Typography, Divider, Skeleton } from '@mui/material';
import { useGetListStudentsQuery, useGetLessonsColumnsQuery } from '@/store/studentJournal/studentJournal.api';

export default function AboutStudentsTemplate() {
  const { data: users, isLoading: isLoadingUsers } = useGetListStudentsQuery('');
  const { data: columns, isLoading: isLoadingColumns } = useGetLessonsColumnsQuery('');
  const maxSumTitle = columns?.Items.reduce((max, column) => {
    const [num1, num2] = column.Title.split('/');
    const sum = parseInt(num1) + parseInt(num2);
    return sum > max ? sum : max;
  }, 0);

  const filteredMaxColumn = columns?.Items.filter(column => {
    const [num1, num2] = column.Title.split('/');
    const sum = parseInt(num1) + parseInt(num2);
    return sum === maxSumTitle;
  });
  return (
    <Box>
      <Card sx={{ minWidth: 275, padding: 3 }}>
        <Typography variant='h5' color="text.secondary" gutterBottom>
          About Students
        </Typography>
        <Divider />
        {!isLoadingUsers && !isLoadingColumns ?
          <>
            <Typography marginTop={1}>
              Number of students: <Typography component='span' fontWeight={700}>{users?.Quantity}</Typography>
            </Typography>

            {filteredMaxColumn?.map(column => (
              <Typography marginTop={1} key={column.Id}>
                The largest sum of numbers in <Typography component='span' fontWeight={700}>Title: {column.Title}, ID: {column.Id}</Typography>
              </Typography>
            ))}
          </>
          :
          <Skeleton width="100%" height='65px' />
        }

      </Card>
    </Box>
  )
}