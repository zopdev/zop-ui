import apiClient from '../../utlis/apiClient';
import { APPLICATION_ENDPOINT } from '../../utlis/apiEndpoints';

const url = APPLICATION_ENDPOINT;

export const getApplication = async () => {
  try {
    const data = await apiClient.get(url);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch applications');
  }
};

export const addApplication = async (values) => {
  try {
    const response = await apiClient.post(url, values);
    return response;
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Failed to add application');
  }
};
