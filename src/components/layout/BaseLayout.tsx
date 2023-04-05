import React, { PropsWithChildren } from 'react';
import { Container, Box, Button } from '@mui/material';
import Link from 'next/link'
import { useRouter } from "next/router"

function BaseLayout({ children }: PropsWithChildren) {
    const router = useRouter()
    const { previous: previousUrlPage } = router.query;
    return (
        <Box height='100vh' padding={5} sx={{ backgroundColor: 'primary.main' }}>
            <Container maxWidth="lg">
                <Box display='flex' justifyContent='space-between' gap={3} marginBottom={3}>
                    <Button disabled={router.pathname == '/'} variant="contained" color="secondary"><Link href={previousUrlPage as string ?? '/'}>Prev Page</Link></Button>
                    <Button disabled={router.pathname == '/aboutStudents'} variant="contained" color="secondary"><Link href='/aboutStudents'>Next Page</Link></Button>
                </Box>
            </Container>
            <Container maxWidth="lg">
                {children}
            </Container>
        </Box>
    )
}

export default BaseLayout