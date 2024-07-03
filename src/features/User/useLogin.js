import { useMutation, useQuery } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { AsyncCompiler } from "sass";
import toast from "react-hot-toast";

export default function useLogin({ onCloseModal }) {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("LOGGED IN");
      onCloseModal();
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return { login, isLoading };
}
