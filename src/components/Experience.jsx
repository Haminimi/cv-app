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
			<div className="form-field-container">
				<label htmlFor="position">Position:</label>
				<input
					type="text"
					id="position"
					autoComplete="off"
					value={positionValue}
					onChange={(event) =>
						onChange(
							'experience',
							index,
							'position',
							event.target.value
						)
					}
				/>
			</div>
			<div className="form-field-container">
				<label htmlFor="from">Date - from:</label>
				<input
					type="date"
					id="from"
					autoComplete="off"
					value={fromValue}
					onChange={(event) =>
						onChange(
							'experience',
							index,
							'from',
							event.target.value
						)
					}
				/>
			</div>
			<div className="form-field-container">
				<label htmlFor="to">Date - until:</label>
				<input
					type="date"
					id="to"
					autoComplete="off"
					value={untilValue}
					onChange={(event) =>
						onChange(
							'experience',
							index,
							'until',
							event.target.value
						)
					}
				/>
			</div>
			<div className="form-field-container">
				<label htmlFor="resp">Responsibilities:</label>
				<input
					type="text"
					id="resp"
					autoComplete="off"
					value={respValue}
					onChange={(event) =>
						onChange(
							'experience',
							index,
							'resp',
							event.target.value
						)
					}
				/>
			</div>
		</div>
	);
}
