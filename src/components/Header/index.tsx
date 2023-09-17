"use client";
import React from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eaeaea;
	border-top: 1px solid #eaeaea;
	padding: 1rem 2rem;
	margin-top: 1rem;
`;

const RightContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 30%;
`;

const Header = (props: Props) => {
	return (
		<Container>
			<div>Brand Name</div>
			<RightContainer>
				<div>Search</div>
				<div>Write</div>
				<div>Sign Up</div>
				<div>Profile</div>
			</RightContainer>
		</Container>
	);
};

export default Header;
