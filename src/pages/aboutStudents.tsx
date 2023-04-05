import BaseLayout from '@/components/layout/BaseLayout'
import Head from 'next/head';
import AboutStudentsTemplate from '@/templates/AboutStudentsTemplate/AboutStudentsTemplate';

function AboutStudents() {
    return (
        <BaseLayout>
            <Head>
                <title>Test App - About Student</title>
            </Head>
            <AboutStudentsTemplate />
        </BaseLayout>
    )
}

export default AboutStudents