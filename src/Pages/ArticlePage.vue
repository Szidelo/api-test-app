<template>
    <h1>Articles</h1>
    <div class="container mx-auto">
        <ArticleList/>
        <!-- <NewsList/> -->
    </div>
</template>

<script lang="ts">
import ArticleList from '../components/ArticleList.vue'
// import NewsList from '@/components/NewsList.vue';
import { defineComponent } from 'vue'
export default defineComponent({
    components: {   
        ArticleList
        // NewsList
    }
})
</script>