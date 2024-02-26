'use client'

import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { User as UserType } from '../interface';
import axios from 'axios';
import Cookie from 'js-cookie'


interface UserState {
  user: UserType | null;
  loading: boolean;
  error: string | null;
}

enum ActionTypes {
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

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


const initialState: UserState = {
  user: null,
  loading: true,
  error: null,
};


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

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);


interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const getUser = async () => {
      try {
        dispatch({ type: ActionTypes.SET_LOADING, payload: true });
        const token = Cookie.get('jwt');
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const response = await axios.post(`https://test-goinventorymanager.koyeb.app/user`);
          console.log('Fetching user data!');

          if (response.status === 200) {
            const userData: UserType = response.data;
            dispatch({ type: ActionTypes.SET_USER, payload: userData });
          }
        } else {
          console.log('No token found');
        }
      } catch (error: any) {
        console.error('Error fetching user data:', error);
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message || 'Unknown error' });
      } finally {
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      }
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};


const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser, ActionTypes };
