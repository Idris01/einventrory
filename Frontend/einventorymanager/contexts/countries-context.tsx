'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import Cookies from 'js-cookie'

interface Country {
  country: string;
  timezones: string[];
}

interface CountriesContextType {
  countries: Country[];
  loading: boolean;
  error: string | null;
}

const CountriesContext = createContext<CountriesContextType | undefined>(undefined);

export const useCountries = () => {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error('useCountries must be used within a CountriesProvider');
  }
  return context;
};

interface CountriesProviderProps {
  children: ReactNode;
}

export const CountriesProvider: React.FC<CountriesProviderProps> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const token = Cookies.get('jwt')
        const response = await fetch('https://test-goinventorymanager.koyeb.app/api/v1/countries', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }

        const countriesData: Country[] = await response.json();
        setCountries(countriesData);
        console.log(countriesData)
        setError(null);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
        setError('Failed to fetch countries. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const value: CountriesContextType = {
    countries,
    loading,
    error,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
