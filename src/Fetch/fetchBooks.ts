import axios from "axios";

const API_KEY = "AIzaSyDNQl-LKSsDluFt24TRLy5lnWZFGIDJ5y8";

const fetchBooks = async (keyWord: string) => {
	try {
		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${keyWord}&key=${API_KEY}`
		);

		// Filter items with an empty description, then map over the remaining items
		const books = response.data.items
			.filter((item: any) => item.volumeInfo.description)
			.map((item: any) => ({
				id: item.id,
				title: item.volumeInfo.title,
				image: item.volumeInfo.imageLinks?.smallThumbnail || "", // You may want to handle the case when imageLinks is undefined
				description: item.volumeInfo.description || "",
				authors: item.volumeInfo.authors || [],
			}));

		console.log(books);
		return books;
	} catch (error) {
		console.error("Error fetching books:", error);
		throw error; // Rethrow the error to handle it at the calling site
	}
};

export { fetchBooks };
