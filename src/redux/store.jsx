import { configureStore } from "@reduxjs/toolkit";
import books from './slices/bookSlice';
import pages from './slices/pagesSlice';

export const store = configureStore({
    reducer:{
        books,
        pages
    }
})

