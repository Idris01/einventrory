import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { User as UserType } from '../interface';


interface UserState {
  user: UserType | null;
  loading: boolean;
  error: string | null;
}

// Define action types
enum ActionTypes {
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

// Define action types for better TypeScript support
interface SetUserAction {
  type: ActionTypes.SET_USER;
  payload: UserType;
}

interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: ActionTypes.SET_ERROR;
  payload: string;
}

type Action = SetUserAction | SetLoadingAction | SetErrorAction;

// Initial state for the user context
const initialState: UserState = {
  user: null,
  loading: true,
  error: null,
};

// Reducer function to handle state changes based on actions
const userReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// Create the user context
const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// UserProvider component to wrap your app and provide the context
interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Add any additional setup logic, such as fetching user data, here
  useEffect(() => {
    // Fetch user data from your backend (e.g., using fetch or Axios)
    // Once you have the data, dispatch the SET_USER action
    // Example:
    // const userData = ... // Fetch user data
    // dispatch({ type: ActionTypes.SET_USER, payload: userData });
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context in components
const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser, ActionTypes };
