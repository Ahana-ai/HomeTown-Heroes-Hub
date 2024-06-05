import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import axios from "axios";

const ConnectWithUs = () => {

	const name=useRef(null)
	const phone=useRef(null)
	const email=useRef(null)
	const subject=useRef(null)
	const queries=useRef(null)

	const baseURL = "http://localhost:5000";


	const handleSubmit = async (e) => {
		console.log({name,phone,email,subject,queries})
		try{
			// const body={name,phone,email,subject,queries}
			e.preventDefault(); 
			const rawData = await axios({
				method: 'post',
				url: `${baseURL}/feedback`,
				data:{name,phone,email,subject,queries}
			});
		}
		catch(e){
			console.log(e)
		}
	};

	return (
		<Box
			sx={{
				background:
					"linear-gradient(180deg, rgba(234,219,200,1) 15%, rgba(252,253,255,1) 95%)",
				py: { xs: 3, md: 5 },
				textAlign: "center",
				mt: 15,
			}}
		>
			<Container>
				<Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
					Connect With Us
				</Typography>
				<form onSubmit={handleSubmit}>
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Responsive grid columns
							gridGap: "20px",
						}}
					>
						<TextField
							label="Your Name"
							variant="outlined"
							fullWidth
							required
							ref={name}
							sx={{
								mb: 2,
								input: {
									"&:focus": {
										backgroundColor: "#F1EFEF",
									},
								},
							}}
						/>
						<TextField
							label="Your Email"
							variant="outlined"
							fullWidth
							required
							type="email"
							ref={email}
							sx={{
								mb: 2,
								input: {
									"&:focus": {
										backgroundColor: "#F1EFEF",
									},
								},
							}}
						/>
						<TextField
							ref={phone}
							label="Your Mobile (optional)"
							variant="outlined"
							fullWidth
							type="mobile"
							sx={{
								mb: 2,
								input: {
									"&:focus": {
										backgroundColor: "#F1EFEF",
									},
								},
							}}
						/>
						<TextField
							ref={subject}
							label="Subject"
							variant="outlined"
							fullWidth
							required
							sx={{
								mb: 2,
								input: {
									"&:focus": {
										backgroundColor: "#F1EFEF",
									},
								},
							}}
						/>
					</Box>
					<TextField
						ref={queries}
						label="Your Queries"
						variant="outlined"
						multiline
						rows={4}
						fullWidth
						required
						sx={{
							mt: 2,
							mb: 2,
							display: "flex",
							alignContent: "center",
							input: {
								"&:focus": {
									backgroundColor: "#F1EFEF",
								},
							},
						}}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ mt: 3 }}
					>
						Submit
					</Button>
				</form>
			</Container>
		</Box>
	);
};

export default ConnectWithUs;
