<template>
    <h1>Books</h1>
    <div class="container mx-auto">
        <BookList/>
    </div>
</template>

<script lang="ts">
import BookList from '@/components/BookList.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    components: {   
        BookList
    }
})
</script>