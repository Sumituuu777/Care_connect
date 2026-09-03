import { createContext, useContext, useState } from "react";
import axios from "axios";

const SupportContext = createContext();

const API_URL = "http://localhost:5000/api";

export const SupportProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Submit support request
  const submitSupportRequest = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        `${API_URL}/support`,
        formData
      );

      // Add newly created request to local state
      setRequests((prev) => [
        response.data.request,
        ...prev,
      ]);

      return {
        success: true,
        data: response.data.request,
      };

    } catch (error) {
      console.error(
        "Support request error:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Something went wrong"
      );

      return {
        success: false,
      };

    } finally {
      setLoading(false);
    }
  };

  // Get all support requests
  const fetchSupportRequests = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `${API_URL}/support`
      );

      setRequests(response.data.requests);

    } catch (error) {
      console.error(
        "Fetch requests error:",
        error
      );

      setError(
        error.response?.data?.message ||
          "Failed to fetch requests"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <SupportContext.Provider
      value={{
        requests,
        loading,
        error,
        submitSupportRequest,
        fetchSupportRequests,
      }}
    >
      {children}
    </SupportContext.Provider>
  );
};

export const useSupport = () => {
  return useContext(SupportContext);
};