/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/login-registration/GoogleLogin";


const Register = () => {
  const {CreateUser} =useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const navigate=useNavigate();

  const onSubmit=(data)=>{
    CreateUser(data.email, data.password );
    navigate("/");
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
      Sign up with StellarBD to enjoy exclusive discounts, early access to collections, and the latest updates. It&apos;s quick, free, and your key to staying stylish—register now!
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
           placeholder="email"
            className="input input-bordered"
             {...register("email", { required: true })} 
             
             />
             {errors.email &&(
              <p className="text-red-500">
                This field is required
              </p>)}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
           placeholder="password"
            className="input input-bordered"
              {...register("password", { required: true, minLength: 6 })}
             />
              {errors.password?.type === 'required' && (
                <p className="text-red-500">
                  Password is required
                </p>)}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-500">
                  Password must Have at least 6 characters
                </p>)}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password"
           placeholder="password"
            className="input input-bordered"
            {...register("confirmPassword", { 
              required: true, 
              validate: value => {
                if (watch("password") === value) {
                  return true;
                } else {
                  return "Passwords do not match";
                }
              }
            })}
               
              />
              {errors.confirmPassword?.type === 'required' && (
                <p className="text-red-500">
                  Both Password must match
                </p>)}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">Sign Up</button>

        </div>
        
          <GoogleLogin />

       
        <p className="p-6 text-center text-sm text-base-content">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
      </form>
     
    </div>
  </div>
</div>
  )
}

export default Register