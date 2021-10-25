const LinksSocialMedia = {
  github: 'Filiperochaa',
  linkedin: 'filipe-azevedo-542463183',
  instagram: 'filipeazevdo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (social == 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${LinksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
}
changeSocialMediaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHub.textContent = data.login
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitHubProfilesInfos()
