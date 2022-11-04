import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom"



const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const navigate = useNavigate()

  const submit = async (data: any) => {
    console.log(data)
    //FETCH API
    try {
      await axios.post("http://localhost:4000/api/auth/signin", data)

      navigate("/dashboard")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <div className="login__form__control">
          <label className="login__form__labels" htmlFor="email">Email</label>
          <input className="login__form__input" id="email" type="email" {...register("email", { required: true })} />
          <label className="login__form__labels" htmlFor="password">Password</label>
          <input className="login__form__input" type="password" {...register("password", { required: true })} />
        </div>
        <Link to={"/register"}>Don't have an account? Create one!</Link>
        <input className="login__form__button" type="submit" value="Log In" />
      </form>
    </div>
  )
}

export default Login