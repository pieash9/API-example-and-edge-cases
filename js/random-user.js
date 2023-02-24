const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  const genderTag = document.getElementById("gender");
  document.getElementById("name").innerHTML =
    user.results[0].name.title +
    " " +
    user.results[0].name.first +
    " " +
    user.results[0].name.last;
  genderTag.innerHTML = user.results[0].gender;
  document.getElementById("location").innerHTML = user.results[0].location.city + ' street '+ user.results[0].location.street.number +' name '+ user.results[0].location.street.name;
  document.getElementById('img').innerHTML = `
  <img  src="${user.results[0].picture.large}" alt="">
  `
  console.log(user.results[0].picture.large);
};
loadUser();
