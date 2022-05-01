import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Regitration = () => {
	let navigate = useNavigate();
	const [newUserInfo, setNewInfo] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState('');

	const registerInfo = ({ target: { name, value } }) => {
		setNewInfo({ ...newUserInfo, [name]: value });
	};


	const SubmitRegisterInfo = (e) => {
		e.preventDefault();

		let errors = {};
		if (!newUserInfo.username) {
			errors["username"] = "Please enter your  Username.";
		}
		if (!newUserInfo.email) {
			errors["email"] = "Please enter your  Email.";
		}
		if (!newUserInfo.password) {
			errors["password"] = "Please enter your  Password.";
		}
		setErrors(errors);

		if (newUserInfo.username && newUserInfo.password && newUserInfo.email) {
			const data = { username: newUserInfo.username, email: newUserInfo.email, password: newUserInfo.password }
			localStorage.setItem('user-info', JSON.stringify(data));
			// const requestOptions = {
			// 	method: 'POST',
			// 	body: JSON.stringify(data),
			// 	headers: { "Accept": "application/json", "Content-Type": "application/json" }
			// };
			// fetch(`https://www.postman.com/collections/0ba2fd8666d34e0eacf8`, requestOptions)
			// 	.then(response => response.json())
			// 	.then(data => console.log(data))
			// 	.catch((err) => {
			// 		console.log(err.message);
			// 	});
			navigate("/sign-in");
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

							<h2 className='main-color'>Sign up</h2>

							<div className="row">
								<form onSubmit={SubmitRegisterInfo}>
									<div className="pb-5 pt-3">
										<input type="text" name="username" onChange={registerInfo} className={errors.username ? "form__input form-control bd-red" : "form__input form-control"} placeholder="Username " />
									</div>
									<div className="pb-5">
										{/* <!-- <span className="fa fa-lock"></span> --> */}
										<input type="email" name="email" onChange={registerInfo} className={errors.email ? "form__input form-control bd-red" : "form__input form-control"} placeholder="Email Address" />
									</div>
									<div className="pb-4">
										{/* <!-- <span className="fa fa-lock"></span> --> */}
										<input type="password" name="password" onChange={registerInfo} className={errors.password ? "form__input form-control bd-red" : "form__input form-control"} placeholder="Password" />
									</div>

									<div className="row justify-content-center">
										<input type="submit" value="Submit" className="btn main-btn text-center" />
									</div>
								</form>
							</div>
							<div className="row pt-2">
								<p>If you have an account ? <Link to="/sign-in" className='text-decoration-none'> Sign in Here</Link></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Regitration;