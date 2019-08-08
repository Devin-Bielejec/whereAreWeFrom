const linkParse = require("parse-link-header");

axios.get(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components/forks?per_page=100`).then( response => {
    // Grab the link header from this initial reponse
    // This will tell us how many pages of results there are
    const parsed = linkParse(response.headers.link);

    // If for some reason that header isn't there
    if (!parsed.last.page) {
        console.log("Error: Invalid link header !");
        return;
    }

    // Build a list of request promises
    const getList =  [];

    for (let i = 1; i <= parsed.last.page; i++) {
        getList.push(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components/forks?per_page=100&page=${i}`)
    }

    // Execute all requests simultaneously
    axios.all(getList).then( responseArr => {

        // reponseArr is an array of reponses. Each Element is one of the requests
        responseArr.forEach( (response) => {

            // If the status code isn't 200, something went wrong
            if (response.status !== 200) {
                console.log("REQUEST ERROR");
            } else {

                // For each entry in the reponse data -- each fork object
                response.data.forEach( (fork) => {
                    console.log(`Fork - Owner: ${fork.owner.login}`);
                })
            }
        })
    })
    .catch(error => {
        console.log(error);
    })
});



//     console.log("hi",response.data[0]);
//     console.log(response.data[0].owner.login)
//     const filteredData = response.data.filter( item => item["created_at"].includes("2019-08-07") );
//     console.log(`Filtered data is`, filteredData);
//     const mappedData = filteredData.map( item => {
//         const newObj = {"login": item.owner.login, "created_at":item["created_at"]};
//         return newObj;    
//     });
//     console.log(mappedData);
//     userNamesData.push(mappedData);
//     let newObj = {};

//     window.setTimeout(1000);
// }).catch( err => console.log(err) );


window.setTimeout(1000);
console.log(userNamesData);

const userNames = userNamesData.map( item => {
    const newList = [];
    newList.push(item.login);
    return newList;
})

console.log("usernames are", userNames);

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


