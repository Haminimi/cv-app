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
}
