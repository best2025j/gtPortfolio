<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'MY SKILLS',
			clients: [
				{
					id: 1,
					title: 'Tailwind CSS',
					img: require('@/assets/images/tailwind.jpg'),
				},
				{
					id: 2,
					title: 'css',
					img: require('@/assets/images/react.png'),
				},
				{
					id: 3,
					title: 'js',
					img: require('@/assets/images/js.png'),
				},
				{
					id: 4,
					title: 'vue',
					img: require('@/assets/images/vue.png'),
				},
				{
					id: 5,
					title: 'html',
					img: require('@/assets/images/html.png'),
				},
				{
					id: 6,
					title: 'bootstrap',
					img: require('@/assets/images/css.png'),
				},
				{
					id: 7,
					title: 'bs',
					img: require('@/assets/images/bootsrap.png'),
				},
				
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
