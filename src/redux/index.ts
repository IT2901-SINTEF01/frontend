import { configureStore } from '@reduxjs/toolkit';
import dashboard from './slices/dashboard';
import filter from './slices/filter';

const LS_STATE_KEY = 'DVT_PERSISTED_STATE' as const;

// Attempt to recover stored state, and if it's not possible recover to empty object.
const recoveredStorage = JSON.parse(localStorage.getItem(LS_STATE_KEY) ?? '{}');

export const store = configureStore({
    reducer: {
        dashboard: dashboard.reducer,
        filter: filter.reducer,
    },
    preloadedState: recoveredStorage,
});

// Save the state when it changes
store.subscribe(() => localStorage.setItem(LS_STATE_KEY, JSON.stringify(store.getState())));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
