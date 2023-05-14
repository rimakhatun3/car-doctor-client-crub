import React, { useContext } from 'react';
import signUp from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
const {createUser} = useContext(AuthContext)
  const handleSignUp =(event)=>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(er=>{
      console.error(er.message)
    })
  }

    return (
        <div>
        
          <form onSubmit={handleSignUp} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col  lg:gap-14 lg:flex-row">
    <div >
      <img src={signUp} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
    <label className="text-center mt-10">
            <span className=" text-center font-semibold text-2xl">Sign Up</span>
          </label>
      <div className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="email" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm password" name='password'  className="input input-bordered" />
         
        </div>
        <label className="label">
            <p>Forget Password Please <Link><button className='btn btn-link'>reset</button></Link> </p>
          </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <label className="mb-4">
            <p>Already Have An Account please <Link to='/login'><button className='btn btn-link'>Login</button></Link> </p>
          </label>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default SignUp;