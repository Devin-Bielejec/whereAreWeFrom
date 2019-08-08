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

async function getUserNames() {
    try { 
        const response = await axios.get(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components`);

        let userNames = [];
        //Determine how many pages there will be by first finding total number of forks
        const forkCount = response.data["forks_count"];
        const numberOfPages = Math.ceil(forkCount/100)

        // Build a list of request promises
        const getList =  [];

        for (let i = 1; i < numberOfPages+1; i++) {
            getList.push(axios.get(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components/forks?per_page=100&page=${i}`));
        }

        // Execute all requests simultaneously
        const responseArr = await axios.all(getList);

        // reponseArr is an array of reponses. Each Element is one of the requests
        responseArr.forEach( (response) => {

            // If the status code isn't 200, something went wrong
            if (response.status !== 200) {
                console.log("REQUEST ERROR");
            } else {

                // Filter the data to only contain students that forked this project in august
                const filteredData = response.data.filter( (fork) => {
                    return fork["created_at"].includes("2019-08");
                })

                filteredData.forEach( item => {
                    userNames.push(item.owner.login);
                })

            }
        })
        
        //make get list
        const getList2 = [];
        //add user name get request to list
        console.log(userNames);

        userNames.forEach( (userName) => getList2.push(axios.get(`https://api.github.com/users/${userName}`)));

        console.log("getlist",getList);
        //execute all request at the same time
        axios.all(getList)
        .then( response => {
            console.log("response",response.data);
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
                });
            });
            });
        } catch (error) {
        console.log(error);
    }
}

getUserNames();



    
