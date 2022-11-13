const posts = [
	{title: "Post One"},
	{title: "Post Two"},
]

function getPosts(){
	setTimeout(() => {
		let output = ""
		posts.forEach((p, index) => {
			output += "<li>"+p.title+"</li>"
		});
		document.body.innerHTML = output;
		console.log("executing 1")
	}, 1000)
}

function createPost(post){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post)
			const error = false;
			if (!error) {
				resolve()
			} else {
				reject("Something wrong happened")
			}
			console.log("executing 2")
		}, 2000)	
	})
}
const promise2 = new Promise((resolve, reject)=>{
	getPosts()
	resolve()
})
const promise1 = createPost({title: "Post Three"})

// createPost({title: "Post Three"}).then(getPosts).catch(err => console.log("error: "+err))
Promise.all([promise1, promise2]).then((values) => {
	console.log(values)
})