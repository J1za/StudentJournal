import Head from 'next/head'
import BaseLayout from '@/components/layout/BaseLayout'
import VisitTable from '@/components/VisitTable';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>Test App</title>
      </Head>
      <Box padding={1.5} border={2} borderColor='ButtonShadow' borderRadius={2} boxShadow={15}>
        <VisitTable />
      </Box>

    </BaseLayout>
  )
}
