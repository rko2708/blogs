import { create } from "zustand";

type BlogData = {
	id: number;
	title: string;
	body: string;
};

type BlogImage = {
	id: number;
	url: string;
};

type TBlogStore = {
    blogsData: BlogData[];
    blogImages: BlogImage[];
    setBlogsData: (blogsData: BlogData[]) => void;
    setBlogImages: (blogImages: BlogImage[]) => void;
}

export const useBlogsStore = create<TBlogStore>((set) => ({
	blogsData: [],
	blogImages: [],
	setBlogsData: (blogsData: BlogData[]) => set({ blogsData }),
	setBlogImages: (blogImages: BlogImage[]) => set({ blogImages })
}));
