import { useEffect, useState } from 'react';
import { getApplicationById } from '../../Queries/Application';
import { useParams } from 'next/navigation';

const datas = {
  data: {
    id: 1,
    name: 'application_1',
    environments: [
      {
        id: 1,
        name: 'prod',
        level: 1,
        applicationID: 1,
        deploymentSpace: null,
        createdAt: '2024-12-15T18:11:52Z',
        updatedAt: '2024-12-15T18:11:52Z',
      },
      {
        id: 2,
        name: 'test',
        level: 3,
        applicationID: 1,
        deploymentSpace: null,
        createdAt: '2024-12-15T18:11:52Z',
        updatedAt: '2024-12-15T18:11:52Z',
      },
      {
        id: 3,
        name: 'stage',
        level: 2,
        applicationID: 1,
        deploymentSpace: null,
        createdAt: '2024-12-15T18:11:52Z',
        updatedAt: '2024-12-15T18:11:52Z',
      },
      {
        id: 4,
        name: 'env3',
        level: 0,
        applicationID: 1,
        deploymentSpace: null,
        createdAt: '2024-12-15T18:12:07Z',
        updatedAt: '2024-12-15T18:12:07Z',
      },
      {
        id: 5,
        name: 'Test-env',
        level: 4,
        applicationID: 1,
        deploymentSpace: null,
        createdAt: '2024-12-16T06:29:49Z',
        updatedAt: '2024-12-16T06:29:49Z',
      },
      {
        id: 6,
        name: 'stage',
        level: 1,
        applicationId: 1,
        deploymentSpace: {
          name: 'exampleName',
          next: {
            name: 'gke',
            next: {
              name: 'test-gcp-04dec',
              next: {
                name: 'monitoring',
                next: null,
              },
            },
          },
        },
        createdAt: '2024-12-15T16:05:06Z',
        updatedAt: '2024-12-15T16:05:06Z',
      },
    ],
    createdAt: '2024-12-15T18:11:52Z',
    updatedAt: '2024-12-15T18:11:52Z',
  },
};

const useGetDeploymentSpace = () => {
  const params = useParams();

  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAppById = async () => {
      try {
        const data = await getApplicationById(params?.['application-id']);
        setValue(data);
        return value;
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    getAppById();
  }, []);

  return { value, loading, error };
};

export default useGetDeploymentSpace;
