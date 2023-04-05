import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IAllSchoolboy, ILessonsColumns, ILessonVisits } from './studentJournal.types'

export const studentJournalApi = createApi({
    reducerPath: 'lessonsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        getListStudents: builder.query<IAllSchoolboy, string>({
            query: () => 'Schoolboy',
        }),
        getLessonsColumns: builder.query<ILessonsColumns, string>({
            query: () => 'Column',
        }),
        getLessonVisits: builder.query<ILessonVisits, string>({
            query: () => 'Rate',
        }),
        addPassStudent: builder.mutation({
            query: (payload) => ({
                url: `Rate`,
                method: 'POST',
                body: payload,
            }),
        }),
        removePassStudent: builder.mutation({
            query: (payload) => ({
                url: 'UnRate',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
})

export const { useGetListStudentsQuery, useGetLessonsColumnsQuery, useGetLessonVisitsQuery, useRemovePassStudentMutation, useAddPassStudentMutation } = studentJournalApi