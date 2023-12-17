<template>
	<div class="col-4 mb-5">
		<div
			class="card"
			style="width: 18rem"
		>
			<img
				:src='img'
				class="card-img-top"
				alt="..."
			/>
			<div class="card-body">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-text">
					{{ desc ? desc : 'no data' }}
				</p>
				<router-link
					:to="'/articles/' + id"
					class="btn btn-primary"
					>Go somewhere</router-link
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
        desc: {
            type: String,
			required: true
        },
        id: {
            type: String
        }
    },


})
</script>

<style scoped>
.card img {
	max-height: 150px;
	object-fit: cover;
}

.card-body p {
	max-height: 100px;
	overflow: hidden;
}
.card-body h5 {
	min-height: 100px;
}
</style>
