import React, { useContext } from 'react';
import login from '../../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {

const navigate = useNavigate()
const location = useLocation()
console.log(location)

const from =location?.state?.from?.pathname  || '/'

  const { signIn } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;

        const loggedUser ={
          email:user.email
        }
        console.log(loggedUser)

        fetch('http://localhost:5000/jwt',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(loggedUser)
        })
        .then(res=>res.json())
        .then(data=>{
console.log(data)
localStorage.setItem('secret',data.token)
        })


        navigate(from,{replace:true})


      })
      .catch(err => {
        console.error(err.message)
      })
  }

  return (
    <div>

      <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:gap-14 lg:flex-row">
          <div >
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
            <label className="text-center mt-10">
              <span className=" text-center font-semibold text-2xl">Login</span>
            </label>
            <div className="card-body">


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
                <input type="password" placeholder="confirm password" name='password' className="input input-bordered" />

              </div>
              <label className="label">
                <p>Forget Password Please <Link><button className='btn btn-link'>reset</button></Link> </p>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className=" mb-5">
                <p>New To this Site Please <Link to='/signUp'><button className='btn btn-link'>Sign Up</button></Link> </p>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;