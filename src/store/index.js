import { configureStore } from '@reduxjs/toolkit';
import { studentJournalApi } from './studentJournal/studentJournal.api';

export const store = configureStore({
   reducer: {
      [studentJournalApi.reducerPath]: studentJournalApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(studentJournalApi.middleware),
});