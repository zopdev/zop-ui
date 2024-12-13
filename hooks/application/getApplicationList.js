import { useState, useEffect } from 'react';
import { getApplication } from '../../Queries/Application';

const useApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCloudAccounts = async () => {
      try {
        const data = await getApplication();
        setApplications(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudAccounts();
  }, []);

  return { applications, loading, error };
};

export default useApplicationList;
