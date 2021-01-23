async function repoList(userName){
  const githubResponse = await fetch(
    `https://api.github.com/users/${userName}/repos?type=owner&sort=updated`
    );
  const repos = await githubResponse.json();
  const markup = repos.map(
    repo => `
      <li>
        <a href="${repo.html_ur}">${repo.name}</a>
        (⭐️ ${repo.stargazers_count})
      </li>
    `
  ).join('');

  const content = document.getElementById('content');
  content.innerHTML = `<ul>${markup}</ul>`
};

repoList('mcortes19');