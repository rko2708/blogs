"use client";

import { useBlogsStore } from "@/client/store/blogsStore";
import ViewBlogCard from "@/components/ViewBlogCard";
import React from "react";
import { usePathname } from "next/navigation";

const ViewBlog = () => {
	const { blogsData, blogImages } = useBlogsStore();
	const pathname = usePathname();
	const index = Number(pathname.split("/").pop());
	return (
		index && (
			<ViewBlogCard
				image={blogImages?.[index]?.url}
				title={blogsData?.[index]?.title}
				body={blogsData?.[index]?.body}
			/>
		)
	);
};

export default ViewBlog;
