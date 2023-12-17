<template>
	<h3>See list</h3>
	<div class="d-flex justify-content-center w-50 mx-auto mb-5">
		<input
			class="form-control"
			v-model="enteredKeyWord"
			placeholder="Search books"
		/>
		<button
			@click="search"
			class="btn btn-success"
		>
			Search
		</button>
	</div>
	<div class="container row mx-auto">
		<BookCard
			v-for="book in books"
			:key="book.id"
			:id="book.id"
			:img="book.image"
			:title="book.title"
			:desc="book.description"
		/>
	</div>
</template>

<script lang="ts">
import BookCard from "./BookCard.vue";
import Book from '../classes/book'
import { fetchBooks } from "@/Fetch/fetchBooks";
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
    components: {
        BookCard
    },

    setup() {
        const books = ref<Book[]>([])
		const enteredKeyWord = ref('')

		const search = () => {
			getBooks(enteredKeyWord.value)
		}

        const getBooks = async(keyWord: string) => {
            const response = await fetchBooks(keyWord)

            if(response) {
                books.value = response
            }
        }

        

        onMounted(() => {
            getBooks('warcraft')
        })

        console.log(books)

        return {books, enteredKeyWord, search}
    }
})

</script>