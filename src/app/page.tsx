"use client";

import { useBlogsStore } from "@/client/store/blogsStore";
import BlogCard from "@/components/BlogCard";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {};

// type BlogData = {
// 	id: number;
// 	title: string;
// 	body: string;
// };

// type BlogImage = {
// 	id: number;
// 	url: string;
// };

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 20%);
	column-gap: 5%;
	row-gap: 0.5%;
	margin-top: 1%;
	margin-left: 5%;
`;

const Home = (props: Props) => {
	const { blogsData, blogImages, setBlogsData, setBlogImages } =
		useBlogsStore();

	// const [blogsData, setBlogsData] = useState<BlogData[] | null>(null);
	const [loading, setLoading] = useState(true);
	// const [blogImages, setBlogImages] = useState<BlogImage[] | null>(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				setBlogsData(data);
				setLoading(false);
			});

		fetch("https://api.thedogapi.com/v1/images/search?limit=10")
			.then((res) => res.json())
			.then((data) => {
				setBlogImages(Array(10).fill(data).flat());
			});
	}, []);

	return loading ? (
		<div>loading...</div>
	) : (
		<Container>
			{blogsData?.map((blogData, index) => (
				<BlogCard
					key={blogData.id}
					id={blogData.id}
					image={blogImages?.[index]?.url}
					title={blogData.title}
					body={blogData.body}
				/>
			))}
		</Container>
	);
};

export default Home;
