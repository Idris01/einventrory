'use client'

import { Organization } from '@/interface';
import axios from 'axios';
import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';


// Define the state type
interface OrganizationState {
  organization: Organization | null;
  loading: boolean;
  error: string | null;
}

// Define action types
enum ActionTypes {
  SET_ORGANIZATION = 'SET_ORGANIZATION',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

// Define action types for better TypeScript support
interface SetOrganizationAction {
  type: ActionTypes.SET_ORGANIZATION;
  payload: Organization;
}

interface SetLoadingAction {
  type: ActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
    type: ActionTypes.SET_ERROR;
    payload: string | null;
}

type Action = SetOrganizationAction | SetLoadingAction | SetErrorAction;

// Initial state for the organization context
const initialState: OrganizationState = {
  organization: null,
  loading: true,
  error: null,
};

// Reducer function to handle state changes based on actions
const organizationReducer = (state: OrganizationState, action: Action): OrganizationState => {
    switch (action.type) {
      case ActionTypes.SET_ORGANIZATION:
        return {
          ...state,
          organization: action.payload,
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

// Create the organization context
const OrganizationContext = createContext<{
  state: OrganizationState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// OrganizationProvider component to wrap your app and provide the context
interface OrganizationProviderProps {
  children: ReactNode;
}

// OrganizationProvider component to wrap your app and provide the context
const OrganizationProvider: React.FC<OrganizationProviderProps & { organizationId: string }> = ({ children, organizationId }) => {
    const [state, dispatch] = useReducer(organizationReducer, initialState);
  
    // Fetching and setting organization data
    useEffect(() => {
      const getOrganization = async () => {
        try {
          dispatch({ type: ActionTypes.SET_LOADING, payload: true });
          const response = await axios.get(`https://test-goinventorymanager.koyeb.app/organizations/${organizationId}`);
          console.log('Fetching org!!!!!')
          if (response.status === 200) {
            const organizationData: Organization = response.data;
            dispatch({ type: ActionTypes.SET_ORGANIZATION, payload: organizationData });
          }
        } catch (error) {
          console.error('Error fetching organization:', error);
          dispatch({ type: ActionTypes.SET_ERROR, payload: 'Failed to fetch organization data' });
        } finally {
          dispatch({ type: ActionTypes.SET_LOADING, payload: false });
        }
      };
  
      getOrganization();
    }, [organizationId]);
  
    return (
      <OrganizationContext.Provider value={{ state, dispatch }}>
        {children}
      </OrganizationContext.Provider>
    );
};

// Custom hook to access the organization context in components
const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error('useOrganization must be used within an OrganizationProvider');
  }
  return context;
};

export { OrganizationProvider, useOrganization, ActionTypes };
