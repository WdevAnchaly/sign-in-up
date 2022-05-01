import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Index = () => {
const nav = useNavigate();
	const logout =()=>{
		localStorage.removeItem("islogin");
		nav('/sign-in')
	}
  return (
    <>
	<div className="container-fluid">
		<div className="row main-content bg-success text-center d-flex w-50">
			<div className="col-12 login_form ">
				<div className="container-fluid p-4 pt-5">
						<h2 className='text-center'>Welcome</h2>
			<img src="./assets/home.gif" alt="home" className="img-fluid" />
					
					<div className="row">				
							<div className="row justify-content-center">
								<button className="btn btn-outline-danger text-center w-50 my-5 rounded-pill" onClick={logout}> LogOut </button>   
							</div>
					</div>
					<div className="row">
						<p>Don't have an account ? <Link to="/sign-up" className='text-decoration-none'> Sign up Here</Link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Index