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
}
