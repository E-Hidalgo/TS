import axios from "axios";
import { useForm } from "react-hook-form";

const RegisterForm = () => {

  const { register, handleSubmit, watch , formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    // FETCH API
    try {
      await axios.post("http://localhost:4000/api/auth/signup", data)
      console.log(data);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="register__form__layout">
          <div className="register__form__control">
            <label
              className="register__form__labels"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="register__form__input"
              id="name"
              type="name"
              {...register("name", { required: true })}
            />
            <div className="register__form__control__error">
              {errors.name?.type === "required" && "Name is required"}
            </div>

            <label
              className="register__form__labels"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="register__form__input"
              id="lastName"
              type="text"
              {...register("lastName", { required: true })}
            />
            <div className="register__form__control__error">
              {errors.lastName?.type === "required" && "Last Name is required"}
            </div>

            <label
              className="register__form__labels"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className="register__form__input"
              id="company"
              type="text"
              {...register("company", { required: true })}
            />
            <div className="register__form__control__error">
              {errors.company?.type === "required" && "Company is required"}
            </div>


          </div>
          <div className="register__form__control">
            <label
              className="register__form__labels"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="register__form__input"
              id="email" type="email"
              {...register("email", { required: true })}
            />
            <div className="register__form__control__error">
              {errors.email?.type === "required" && "Email is required"}
            </div>

            <label
              className="register__form__labels"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="register__form__input"
              type="password"
              {...register("password", { required: true })}
            />
            <div className="register__form__control__error">
              {errors.password?.type === "required" && "Password is required"}
            </div>
          </div>
        </div>
        <input className="register__form__button" type="submit" value="Register" />
      </form>
    </div>
  )
}

export default RegisterForm