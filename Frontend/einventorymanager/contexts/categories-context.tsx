import { useEffect, useState } from 'react';

export interface Category {
    id: string;
    name: string;
    created_at: string; // Assuming datetime will be in string format
    description: string;
    organization_id: string;
}
  
export interface CategoryContext {
    getCategoriesByOrganizationId: (organizationId: string) => Promise<Category[]>;
}

export function useCategoryContext(){
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCategoriesByOrganizationId = async (organizationId: string): Promise<Category[]> => {
    setLoading(true);
    try {
      const response = await fetch(`/categories/${organizationId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const categoriesData: Category[] = await response.json();
      setCategories(categoriesData);
      setError(null);

      return categoriesData;
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories. Please try again.');
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optionally, you might want to fetch some initial data when the component mounts.
    // getCategoriesByOrganizationId('your-organization-id');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    categories,
    loading,
    error,
    getCategoriesByOrganizationId,
  };
};
