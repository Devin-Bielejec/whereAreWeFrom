console.log("hi");

const NY = document.querySelector("#NY");

NY.addEventListener("click", e => e.target.style.fill = "green");
console.log(NY);

const userNames = [ "rleslie1015", "ajkizer", "Devin-Bielejec", "AceMouty"];

let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
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
                  "North Dakota",
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
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]

let statesAbbr = [ "AK",
"AL",
"AR",
"AZ",
"CA",
"CO",
"CT",
"DC",
"DE",
"FL",
"GA",
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
"RI",
"SC",
"SD",
"TN",
"TX",
"UT",
"VA",
"VT",
"WA",
"WI",
"WV",
"WY",
"unknown"]

let stateObj = {};

statesAbbr.forEach(item => stateObj[item] = 0);

userNames.forEach( (item) => {
    axios.get(`https://api.github.com/users/${item}`)
    .then( response => {
        let location = response.data.location;
        location === null ? location = "unknown" : true;

        let stateName = states.filter( item => location.includes(item))[0];
        let stateNameAbbr = statesAbbr.filter( item => location.includes(item))[0];

        if (stateNameAbbr != undefined){
            stateNameAbbr = stateNameAbbr;
        } else if (stateName != undefined) {
            stateNameAbbr = statesAbbr[states.indexOf(stateName)];
        } else {
            console.log(`The location ${location} does not match`);
            stateNameAbbr = "uknown";
        }
        console.log(`The state is ${stateNameAbbr}`);
        console.log(`state Obj is ${stateObj}`);
        console.log(stateObj);
        stateObj[stateNameAbbr] += 1;

        const numberOfStudents = Object.keys(stateObj).reduce( (acc, cur) => {
            console.log('hi',acc, cur, stateObj[cur]);
            console.log(acc + stateObj[cur]);
            return acc + stateObj[cur];
        }, 0);
        console.log(`Number of students is ${numberOfStudents}`);

        statesAbbr.forEach( item => {
            const stateItem = document.querySelector(`#${item}`);
            const stateValue = stateObj[item];
            const stateValuePercentage = stateValue/numberOfStudents;
            console.log(stateValuePercentage);
            stateItem.style.fill = `rgba(0,0,0,${stateValuePercentage}`;
        })


        }
        )
    .catch( err => console.log(err))
}
)

