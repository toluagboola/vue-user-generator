const app = Vue.createApp({
	data() {
		return {
			firstName: "Toluwanimi",
			lastName: "Agboola",
			email: "tolu@tolu.com",
			gender: "female",
			picture: "https://randomuser.me/api/portraits/men/10.jpg",
		};
	},

	methods: {
		async getUser() {
			const res = await fetch("https://randomuser.me/api");

			const { results } = await res.json();
			const { name, email, gender, picture } = results[0];

			this.firstName = name.first;
			this.lastName = name.last;
			this.email = email;
			this.gender = gender;
			this.picture = picture.large;
		},
	},
});

app.mount("#app");

// new Vue({
// 	el: "#app",
// 	data: {
// 		name: "Hello bitches!",
// 	},
// 	methods: {
// 		alertname: function () {
// 			alert(`Your name is ${this.name}`);
// 		},
// 	},
// });

// new Vue({
// 	el: ".desc",
// 	data: {
// 		desc: `This is my first Vue application`,
// 	},
// });
