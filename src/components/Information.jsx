export default function Information({
	onChange,
	nameValue,
	emailValue,
	numberValue,
}) {
	return (
		<div className="form-section-container">
			<h2 className="information-header form-section-header">
				General Information
			</h2>
			<div className="form-field-container">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					autoComplete="off"
					value={nameValue}
					onChange={(event) =>
						onChange('information', 'name', event.target.value)
					}
				/>
			</div>
		</div>
	);
}