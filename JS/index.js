//testing  forks?page1&per_page:100
let dataObject = {};
for (let i = 1; i < 2; i++) {
    axios.get(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components/forks?page=${i}`).then( response => {
        console.log(response);
        console.log(response["full_name"]);
        window.setTimeout(1000);
    }).catch( err => console.log(err) );
}

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

statesAbbr.forEach(item => stateObj[item] = []);

userNames.forEach( (userName) => {
    axios.get(`https://api.github.com/users/${userName}`)
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
        
        stateObj[stateNameAbbr].push(userName);

        const numberOfStudents = Object.keys(stateObj).reduce( (acc, cur) => {
            return acc + stateObj[cur].length;
        }, 0);

        statesAbbr.forEach( stateAbbr => {
            const stateItem = document.querySelector(`#${stateAbbr}`);
            const stateFrequency = stateObj[stateAbbr].length;
            const stateFrequencyPercentage = stateFrequency/numberOfStudents;
            stateItem.style.fill = `rgba(0,0,0,${stateFrequencyPercentage}`;

            //click event that alerts user names of people in state
            stateItem.addEventListener("click", event => {
                
                alert()
            })
        })


        }
        )
    .catch( err => console.log(err))
}
)


