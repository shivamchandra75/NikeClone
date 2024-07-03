import styled from "styled-components";
import Row from "./Row";
import useLogin from "../features/User/useLogin";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Form = styled.form`
  background-color: #fff;
  padding: 5rem;
`;

export default function LoginForm({ onCloseModal }) {
  const { login } = useLogin(onCloseModal);
  //FORM
  const { handleSubmit, register } = useForm();

  function onSuccess(data) {
    if (!data.email || !data.password) return;
    console.log(data.email);
    login({ email: data.email, password: data.password });
  }
  function onError() {}

  return (
    <Form onSubmit={handleSubmit(onSuccess, onError)} action="">
      <Row type="vertical">
        <label htmlFor="">Email</label>
        <input type="text" {...register("email", { required: true })} />
        <label htmlFor="">Password</label>
        <input type="text" {...register("password", { required: true })} />
        <button>LOGIN</button>
      </Row>
    </Form>
  );
}
