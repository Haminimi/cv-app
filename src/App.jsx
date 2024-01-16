import { useState } from 'react';
import Information from './components/Information';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

export default function App() {
	const [form, setForm] = useState({
		information: {
			name: '',
			email: '',
			number: '',
		},
		education: [{ school: '', title: '', finished: '' }],
		experience: [
			{ company: '', position: '', from: '', until: '', resp: '' },
		],
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleInformationChange(category, fieldName, value) {
		setForm((prevForm) => ({
			...prevForm,
			[category]: {
				...prevForm[category],
				[fieldName]: value,
			},
		}));
	}

	function handleChange(section, index, key, value) {
		setForm((prevForm) => {
			const updatedSection = [...prevForm[section]];
			updatedSection[index][key] = value;

			return { ...prevForm, [section]: updatedSection };
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		!isSubmitted ? setIsSubmitted(true) : setIsSubmitted(false);
	}

	function handleFormEdit() {
		setIsSubmitted(false);
	}

	function addEducation() {
		setForm((prevForm) => {
			const newEducation = [
				...prevForm.education,
				{ school: '', title: '', finished: '' },
			];
			return { ...prevForm, education: newEducation };
		});
	}

	function addExperience() {
		setForm((prevForm) => {
			const newExperience = [
				...prevForm.experience,
				{ company: '', position: '', from: '', until: '', resp: '' },
			];
			return { ...prevForm, experience: newExperience };
		});
	}

	return (
		<main>
			{!isSubmitted ? (
				<>
					<h1>CV App</h1>
					<br />
					<form>
						<Information
							onChange={handleInformationChange}
							nameValue={form.information.name}
							emailValue={form.information.email}
							numberValue={form.information.number}
						/>
						<div className="form-section-header education-header">
							<h2 className="education-h3">Education</h2>
							<span
								className="material-symbols-outlined"
								onClick={addEducation}
							>
								add
							</span>
						</div>
						{form.education.map((education, index) => (
							<Education
								key={index}
								index={index}
								onChange={handleChange}
								schoolValue={education.school}
								titleValue={education.title}
								finishedValue={education.finished}
							/>
						))}
						<div className="form-section-header experience-header">
							<h2 className="experience-h3">Experience</h2>
							<span
								className="material-symbols-outlined"
								onClick={addExperience}
							>
								add
							</span>
						</div>
						{form.experience.map((experience, index) => (
							<Experience
								key={index}
								index={index}
								onChange={handleChange}
								companyValue={experience.company}
								positionValue={experience.position}
								fromValue={experience.from}
								untilValue={experience.until}
								respValue={experience.resp}
							/>
						))}
						<button onClick={handleSubmit}>Submit</button>
						<a
							href="https://github.com/Haminimi"
							aria-label="GitHub"
						>
							<i
								className="devicon-github-original"
								aria-hidden="true"
							></i>
						</a>
					</form>
				</>
			) : (
				<div className="submitted-container">
					<div className="submitted-header">
						<h2 className="submitted-h2">Submitted</h2>
						<button
							onClick={handleFormEdit}
							className="edit-button"
						>
							Edit
						</button>
					</div>
					<br />
					<div className="submitted-section">
						<h3>Information</h3>
						<ul>
							<li>
								<b>Name:</b> {form.information.name}
							</li>
							<li>
								<b>Email:</b> {form.information.email}
							</li>
							<li>
								<b>Number:</b> {form.information.number}
							</li>
						</ul>
					</div>
					<br />
					<div className="submitted-section">
						<h3>Education</h3>
						<div className="education-submitted">
							{form.education.map((education, index) => (
								<div key={index}>
									<ul>
										<li>
											<b>School:</b> {education.school}
										</li>
										<li>
											<b>Title of study:</b>{' '}
											{education.title}
										</li>
										<li>
											<b>Finished:</b>{' '}
											{education.finished}{' '}
										</li>
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
