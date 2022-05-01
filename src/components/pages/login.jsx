import React, {useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
	const [userInfo, setInfo] = useState({
		username: '',
		password: '',
	});
	const [errors, setErrors] = useState('');

	const loginInfo = ({ target: { name, value } }) => {
		setInfo({ ...userInfo, hasChanged: true, [name]: value });
	};

 const submitInfo = (e) => {
		e.preventDefault();
		let errors = {};
		if (!userInfo.username) {
			errors["username"] = "Please enter your  Username.";
		}
		if (!userInfo.password) {
			errors["password"] = "Please enter your  Password.";
		}
		setErrors( errors );

		if (userInfo.username && userInfo.password) {
			fetch(`https://www.postman.com/collections/0ba2fd8666d34e0eacf8`)
				.then((response) => response.json())
				.then((actualData) => {
					let apiData = actualData.item[0].item;
					// for (let z = 0; z < apiData.length; z++) {				
						if (apiData[0].name === "Sign Up") {
							let data = apiData[0].request.body.raw;
							const acData = JSON.parse(data);
							if((userInfo.username === acData.username || userInfo.username === acData.email)  && userInfo.password === acData.password){
								localStorage.setItem('islogin', JSON.stringify(true));
								navigate('/')
							}else{
								setErrors( errors["logErr"] = "Username Or Password are nat match" );
							}
						}
						// }
				})
				.catch((err) => {
					console.log(err.message);
				});
				
			
		}
	}

	return (
		<>
			<div className="container-fluid">
				<div className="row main-content bg-success text-center d-flex w-50">
					<div className="col-md-4 text-center company__info">
						<span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
						<h4 className="company_title">DEMO</h4>
					</div>
					<div className="col-md-8 col-xs-12 col-sm-12 login_form ">
						<div className="container-fluid p-4">
							<h2 className='main-color'>Log In</h2>
							<h5 className={errors.logErr ? "bg-danger":"d-none"}>{errors.logErr }</h5>
							<div className="row">
								<form onSubmit={submitInfo}>
									<div className="pb-5 pt-3">
										<input type="text" name="username" className={errors.username ? "form__input form-control bd-red" : "form__input form-control"} onChange={loginInfo} placeholder="Username / Email Address" />
									</div>
									<div className="pb-4">
										<input type="password" name="password" className={errors.password ? "form__input form-control bd-red" : "form__input form-control"} onChange={loginInfo} placeholder="Password" />
									</div>

									<div className="row justify-content-center">
										<button type="submit" value="Submit" className="btn main-btn text-center"> Sign in </button>
									</div>
								</form>
							</div>
							<div className="row pt-2">
								<p>Don't have an account ? <Link to="/sign-up" className='text-decoration-none'> Sign up Here</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
