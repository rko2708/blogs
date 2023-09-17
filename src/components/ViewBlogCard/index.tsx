"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

type Props = {
	title: string;
	body: string;
	image: string | undefined;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	border: 1px solid #fff;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 10px;
	margin-top: 20px;
    margin-left: 10%;
`;

const StyledTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: #fff;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-bottom: 10px;
	height: 50px;
`;

const StyledBody = styled.div`
	font-size: 16px;
	color: #fff;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	margin-top: 10px;
	border-top: 1px solid #fff;
	padding-top: 10px;
`;

const ViewBlogCard = (props: Props) => {
	const { title, body, image } = props;
	return (
		<Container>
			<StyledTitle>{title}</StyledTitle>
			{image && (
				<Image src={image} alt="blog-image" width={1200} height={900} />
			)}
			<StyledBody>{body}</StyledBody>
		</Container>
	);
};

export default ViewBlogCard;
