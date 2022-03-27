console.log();
console.log("Hello Craig, How are we today?");
console.log();
// ? -- starting a js file
//
const user = document.querySelector("#github_user");
const github_user_data_container = document.querySelector(".gethub_user_data_list");
const gethub_user_data_container2 = document.querySelector(".gethub_user_data_list2");

function printName() {
  console.log(user.value);
}

function clearUser(e) {
  console.log("clearing");
  gethub_user_data_container2.innerHTML = "<p></p>";
}

async function getGitHubUserData(e) {
  var response = await fetch(`https://api.github.com/users/${user.value}`);
  var userData = await response.json();
  console.log("userData----", userData);
  //   console.log("userData.login----", userData.login);
  //   console.log("e(this)----", e);
  //   console.log("obj.keys----", Object.keys(userData));
  var userDataKeysArray = Object.keys(userData);
  var userDataValueArray = Object.values(userData);
  console.log("KEYS:", userDataKeysArray);
  //   console.log("VALS:", userDataValueArray);
  //   for (var i = 0; i < userDataKeysArray.length; i++) {
  // this gets all the data keys and values
  //     var coder = `${userDataKeysArray[i]}: ${userDataValueArray[i]}`;
  //     github_user_data_container.innerHTML += `<h2 class="coder-text">${coder}'</h2>`;
  //   }
  // this gets specific items
  //   console.log();
  var gitHubUser = `login: ${userData.login}<br>name: ${userData.name}<br>email: ${userData.email}<br>location: ${userData.location}<br>repos: ${userData.public_repos}<br>date created: ${userData.created_at}<br><a href="${userData.html_url}" target='_blank'>link to: ${userData.login}</a>`;
  // user_link = `https://github.com/${userData.login}`
  gethub_user_data_container2.innerHTML += `<div class="container border border-warning border-3 d-flex mb-3"><div class="container"><h2 class="gitHubUser-text">${gitHubUser}</h2></div><img src="${userData.avatar_url}" alt="${userData.login}"class="rounded-circle img-thumbnail w-25"></div>`;
}

//
console.log();
console.log("end of file");
console.log();

/* 
Array (32)
0 "login"
1 "id"
2 "node_id"
3 "avatar_url"
4 "gravatar_id"
5 "url"
6 "html_url"
7 "followers_url"
8 "following_url"
9 "gists_url"
10 "starred_url"
11 "subscriptions_url"
12 "organizations_url"
13 "repos_url"
14 "events_url"
15 "received_events_url"
16 "type"
17 "site_admin"
18 "name"
19 "company"
20 "blog"
21 "location"
22 "email"
23 "hireable"
24 "bio"
25 "twitter_username"
26 "public_repos"
27 "public_gists"
28 "followers"
29 "following"
30 "created_at"
31 "updated_at"


*/
