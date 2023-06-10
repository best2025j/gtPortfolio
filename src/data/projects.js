// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	
	{
		id: 2,
		title: 'RESPONSIVE WEBSITE',
		category: 'RESPONSIVE FRONT-END USING VUE.JS',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'E-COMMERCE',
		category: 'INTERACTIVE FRONT-END E-COMMERCE',
		img: require('@/assets/images/web-project-2.jpg'),
	},

	{
		id: 5,
		title: 'SOCIAL APP',
		category: 'INTERACTIVE SOCIAL APP',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	
];

export default projects;
