console.log("hi");

const NY = document.querySelector("#NY");

NY.addEventListener("click", e => e.target.style.fill = "green");
console.log(NY);

const userNames = ["Devin-Bielejec", "AceMouty", "rleslie1015", "ajkizer"];

userNames.forEach( item => {
    axios.get(`https://api.github.com/users/${item}`)
    .then( response => {
        console.log(response.data.location);
        })
    .catch( err => err)
}
)