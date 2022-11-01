// setTimeout(() => {
// 	console.log("Merhaba");
// }, 2000);
// setInterval(() => {
// 	console.log("Ben her sn çalışacağım");
// }, 1000);

// const sayHi = (cb) => {
// 	cb();
// };
// sayHi(()=>{
//     console.log("Hello")
// });

import fetch from "node-fetch";
import axios from "axios";
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((data) => data.json())
// 	.then((users) => {
// 		console.log("Users loaded", users);
// 	});
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// 	.then((data) => data.json())
// 	.then((post) => {
// 		console.log("Post 1 loaded", post)
// 		fetch("https://jsonplaceholder.typicode.com/posts/2")
// 			.then((data) => data.json())
// 			.then((data) => console.log("Post 2 yüklendi", data));
// 	});

// async function getData() {
// 	const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
// 	const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
// 	const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");
// 	console.log("users", users);
// 	console.log("post1", post1);
// 	console.log("post2", post2);
// }
// getData();
const getUsers = () => {
	return new Promise(async (resolve, reject) => {
		const { data } = await axios("https://jsonplaceholder.typicode.com/users");
		resolve(data);
	});
};

const getPost = (post_id) => {
	return new Promise(async (resolve, reject) => {
		const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
		resolve(data);
	});
};

getUsers()
	.then((data) => console.log(data))
	.catch((e) => console.log(e));

getPost(1)
	.then((data) => console.log(data))
	.catch((e) => console.log(e));
