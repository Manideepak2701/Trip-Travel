import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import homeImage from "../screens/p2.jpg";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

function Feedback() {
	const [info, setInfo] = useState({
		name: '',
		email: '',
		message: '',
		phone: '',
		uploadedFiles: [],
		buttonText: 'Submit',   
	});
	const { name, email, message, phone, uploadedFiles, buttonText, uploadPhotosButtonText } = info;
	const { REACT_APP_CLOUD_NAME, REACT_APP_UPLOAD_SECRET } = process.env;

	const handleSubmit = e => {
		e.preventDefault();

		// setInfo({ ...info, buttonText: '...sending' });

		axios({
			method: 'POST',
			url: 'http://localhost:8080/api/feedback',
			data: { name, email, message, phone },
		})
			.then(res => {
				if (res.data.success)
					
				setInfo({
					...info,
					name: '',
					phone: '',
					email: '',
					message: '',
					buttonText: 'Submited',
					uploadPhotosButtonText: 'Uploaded',
				});
			})
			.catch(err => {
				if (err.response.data.error) ;
			});
	};

	const handleChange = name => e => {
		setInfo({ ...info, [name]: e.target.value });
	};

	const uploadWidget = () => {
		window.cloudinary.openUploadWidget(
			{
				cloud_name: REACT_APP_CLOUD_NAME,
				upload_preset: REACT_APP_UPLOAD_SECRET,
				tags: ['images'],
			},
			function (error, result) {
				if (error) console.log(error);
				setInfo({ ...info, uploadPhotosButtonText: 'Uploaded' });
			}
		);
	};

	return (
		<div className='form'>
			<div className="row justify-content-center mt-5">
        <div className="col-md-4 mt-5 text-center shadow-lg p-3 mb-5 bg-white rounded">
		<img style={{ width: 100, height: 100 }} src={homeImage} />
			{/* upload files */}
			<Form onSubmit={handleSubmit}>
				<br></br>
				{/* Name */}
				<Form.Group>
					<Form.Control
						value={name}
						onChange={handleChange('name')}
						type='name'
						placeholder='Enter your name'
						required
					/>
				</Form.Group>
				{/* Phone */}
				<Form.Group>
					<Form.Control
						value={phone}
						onChange={handleChange('phone')}
						type='phone'
						placeholder='Enter your phone number'
						required
					/>
				</Form.Group>
				{/* email */}
				<Form.Group>
					<Form.Control
						value={email}
						onChange={handleChange('email')}
						type='email'
						placeholder='Enter email'
						required
					/>
				</Form.Group>
				{/* text area */}
				<Form.Group>
					<Form.Control
						onChange={handleChange('message')}
						as='textarea'
                        placeholder='description'
						value={message}
						rows={3}
						required
					/>
				</Form.Group>

				<Button type='submit'>{buttonText}</Button>
			</Form>
            </div>
            </div>
		</div>
	);
}

export default Feedback;