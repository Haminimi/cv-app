export default function Experience({
	index,
	onChange,
	companyValue,
	positionValue,
	fromValue,
	untilValue,
	respValue,
}) {
	return (
		<div className="form-section-container">
			<div className="form-field-container">
				<label htmlFor="company">Company name:</label>
				<input
					type="text"
					id="company"
					autoComplete="off"
					value={companyValue}
					onChange={(event) =>
						onChange(
							'experience',
							index,
							'company',
							event.target.value
						)
					}
				/>
			</div>
		</div>
	);
}
