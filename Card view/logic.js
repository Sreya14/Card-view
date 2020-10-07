function loadjson(file){
	return new Promise((resolve, reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("details.json");
newfile.then(data=>{
	console.log(data);
	var child1 = document.querySelector(".child1");
	details(data.details[0], child1);
	var child2 = document.querySelector(".child2");
	details(data.details[1],child2);
})

function details(det,child){
	//var cardContainer = document.createElement("div");
	var img = document.createElement("img");
	img.src = det.image;
	child.appendChild(img);

	var name = document.createElement("h4");
	name.textContent = det.Name;
	child.appendChild(name);

	var email = document.createElement("h4");
	email.textContent = det.Email;
	child.appendChild(email);

	var button = document.createElement("a");
	button.textContent=det.resumeTitle;
	button.href = det.resume;
	//button.setAttribute("id","displayResume");
	button.setAttribute("class","btn btn-primary")
	child.appendChild(button);

	child.appendChild(document.createElement("br"));

	var git = document.createElement("a");
	git.textContent = "Git";
	git.href = det.git;
	// git.setAttribute("style","margin-right:6%;")
	child.appendChild(git);

	child.appendChild(document.createElement("br"));
	
	var linkedIn = document.createElement("a");
	linkedIn.textContent = "LinkedIn";
	linkedIn.href = det.linkedIn;
	child.appendChild(linkedIn);
}