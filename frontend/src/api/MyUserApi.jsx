import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useCreateMyUser = () => {
  const createMyUserRequest = async (user) => {
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);
  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useCreateMyUser;
