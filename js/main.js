
console.log(orgname);

el = document.getElementsByClassName('orgname');

for(var i=0;i<el.length;i++)
{
    el[i].innerHTML=orgname;
}

document.getElementById("github_link").onclick = function(){
    window.open('https://github.com/'+github_username)
}

document.getElementById("github_repo").onclick = function(){
    window.open('https://github.com/'+github_username+'/'+github_reponame)
}

document.getElementById("linkedin").onclick = function(){
    window.open('https://www.linkedin.com/in/'+linkedin)
}

document.getElementById("facebook").onclick = function(){
    window.open('https://facebook.com/'+facebook)
}

document.getElementById("instagram").onclick = function(){
    window.open('https://instagram.com/'+instagram)
}

document.getElementById("message").innerHTML=message;

document.getElementById("logo").src=logo_url;

const apiurl=`https://api.github.com/repos/${github_username}/${github_reponame}/contributors`;

fetch(apiurl)
.then(response => response.json())
.then(data => {
    
    console.log(data)

    console.log(data.length)

    var n = data.length;

    for(var i=0;i<n;i++)
    {
        console.log(data[i]['avatar_url']);
        console.log(data[i]['login']);
        console.log(data[i]['html_url']);

        var img = data[i]['avatar_url'];
        var username = data[i]['login'];
        var profile_url = data[i]['html_url'];
        var contributions = data[i]['contributions'];

        document.getElementById("con").innerHTML += `
        
        <div class="col col-6 col-sm-6 col-md-4 col-lg-3 pt-2 pb-2">
				<div class="card text-center">
                    <a href="${profile_url}" target="blank">
					<img class="mt-3 "src="${img}" alt="Avatar" style="width:70%; align-self: center;">
					<div class="content"> </a>
					<h5 style="max-width:90%"><b>${username}</b></h5> 
					<p style="color:#d85c36">${contributions} contributions</p> 
					</div>
                   
				</div>
			</div>
        
        `;


    }



});