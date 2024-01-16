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
		</div>
	);
}
