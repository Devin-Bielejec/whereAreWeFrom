console.log("hi");

const NY = document.querySelector("#NY");

NY.addEventListener("click", e => e.target.style.fill = "green");
console.log(NY);

const userNames = ["Devin-Bielejec", "AceMouty", "rleslie1015", "ajkizer"];

let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]

let statesAbbr = [ "AK",
"AL",
"AR",
"AS",
"AZ",
"CA",
"CO",
"CT",
"DC",
"DE",
"FL",
"GA",
"GU",
"HI",
"IA",
"ID",
"IL",
"IN",
"KS",
"KY",
"LA",
"MA",
"MD",
"ME",
"MI",
"MN",
"MO",
"MS",
"MT",
"NC",
"ND",
"NE",
"NH",
"NJ",
"NM",
"NV",
"NY",
"OH",
"OK",
"OR",
"PA",
"PR",
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VA",
"VI",
"VT",
"WA",
"WI",
"WV",
"WY"]

userNames.forEach( item => {
    axios.get(`https://api.github.com/users/${item}`)
    .then( response => {
        const location = response.data.location;
        const filter1 = states.filter( item => location.includes(item));
        const filter2 = statesAbbr.filter( item => location.includes(item));
        console.log(filter1);
        console.log(filter2);
        console.log(response.data.location);
        })
    .catch( err => err)
}
)