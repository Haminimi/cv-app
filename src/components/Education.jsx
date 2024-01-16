export default function Education({
	index,
	onChange,
	schoolValue,
	titleValue,
	finishedValue,
}) {
	return (
		<div className="form-section-container">
			<div className="form-field-container">
				<label htmlFor="school">School:</label>
				<input
					type="text"
					id="school"
					autoComplete="off"
					value={schoolValue}
					onChange={(event) =>
						onChange(
							'education',
							index,
							'school',
							event.target.value
						)
					}
				/>
			</div>
			<div className="form-field-container">
				<label htmlFor="study">Title of study:</label>
				<input
					type="text"
					id="study"
					autoComplete="off"
					value={titleValue}
					onChange={(event) =>
						onChange(
							'education',
							index,
							'title',
							event.target.value
						)
					}
				/>
			</div>
		</div>
	);
}
