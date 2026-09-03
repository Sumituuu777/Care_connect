import { createContext, useContext, useState } from "react";
import axios from "axios";

const VolunteerContext = createContext();

const API_URL = "https://care-connect-my2e.onrender.com/api";

export const VolunteerProvider = ({ children }) => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Register a new volunteer
  const registerVolunteer = async (formData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(
        `${API_URL}/volunteers`,
        formData
      );

      setVolunteers((prev) => [
        response.data.volunteer,
        ...prev,
      ]);

      return {
        success: true,
        data: response.data.volunteer,
      };
    } catch (error) {
      console.error("Volunteer registration error:", error);

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

  // Fetch all volunteers
  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `${API_URL}/volunteers`
      );

      setVolunteers(response.data.volunteers);
    } catch (error) {
      console.error("Fetch volunteers error:", error);

      setError(
        error.response?.data?.message ||
          "Failed to fetch volunteers"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <VolunteerContext.Provider
      value={{
        volunteers,
        loading,
        error,
        registerVolunteer,
        fetchVolunteers,
      }}
    >
      {children}
    </VolunteerContext.Provider>
  );
};

export const useVolunteer = () => {
  return useContext(VolunteerContext);
};