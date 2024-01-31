import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast';
import { login as loginAPI } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: () => {
        // Recall we have access to the user data 
      navigate("/dashboard");
    },
    onError:(err) => {
        console.log('ERROR', err)
        toast.error("Provided email or password are incorrect")
    }
  });

  return { login, isLoading };
}
