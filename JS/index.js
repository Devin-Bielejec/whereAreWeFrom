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
                  "Wyoming",
                "Github location is not complete"]

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

let frequencyByState = {};

//we are going to add user names into each state
statesAbbr.forEach(item => frequencyByState[item] = []);

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

        console.log("getlist",getList2);
        //execute all request at the same time
        const userNamesData = await axios.all(getList2)
        
        //data coming back is ojbects in an array
        userNamesData.forEach( user => {
            let location = user.data.location;
            
            location === null ? location = "unknown" : true;

            let stateName = states.filter( item => location.includes(item))[0];
            let stateNameAbbr = statesAbbr.filter( item => location.includes(item))[0];

            if (stateNameAbbr != undefined){
                stateNameAbbr = stateNameAbbr;
            } else if (stateName != undefined) {
                stateNameAbbr = statesAbbr[states.indexOf(stateName)];
            } else {
                console.log(`The location ${location} does not match`);
                stateNameAbbr = "unknown";
            }
            console.log(user);
            frequencyByState[stateNameAbbr].push(user.data.login);
        });

        const numberOfStudents = Object.keys(frequencyByState).reduce( (acc, cur) => {
            return acc + frequencyByState[cur].length;
        }, 0);

        statesAbbr.forEach( stateAbbr => {
            const stateItem = document.querySelector(`#${stateAbbr}`);
            const stateFrequency = frequencyByState[stateAbbr].length;
            const stateFrequencyPercentage = stateFrequency/numberOfStudents;
            stateItem.style.fill = `rgba(0,0,0,${stateFrequencyPercentage*2}`;

            //click event that alerts user names of people in state
            stateItem.addEventListener("click", event => {
                const currentOl = document.getElementById("listForUsers");
                console.log(currentOl);
                currentOl != null ? currentOl.parentNode.removeChild(currentOl) : true;

                console.log(event.target.id);
                const usersByThisState = frequencyByState[event.target.id];
                
                const sectionForInfo = document.querySelector("#usersByState");
                const headingStateName = document.createElement("h3");
                headingStateName.textContent = states[statesAbbr.indexOf(event.target.id)];
                sectionForInfo.appendChild(headingStateName);
                
                const ol = document.createElement("ol");
                ol.id = "listForUsers";
                sectionForInfo.appendChild(ol);


                usersByThisState.forEach( item => {
                    const pTag = document.createElement("p");
                    pTag.textContent = item;
                    sectionForInfo.appendChild(pTag);
                })
            });
        });

        } catch (error) {
        console.log(error);
    }
}

getUserNames();



    
