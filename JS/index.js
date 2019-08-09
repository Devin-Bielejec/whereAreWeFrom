
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
        // const response = await axios.get(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components`, {auth: auth});

        // let userNames = [];
        // //Determine how many pages there will be by first finding total number of forks
        // const forkCount = response.data["forks_count"];
        // const numberOfPages = Math.ceil(forkCount/100)

        // // Build a list of request promises
        // const getList =  [];

        // for (let i = 1; i < numberOfPages+1; i++) {
        //     getList.push(axios.get(`https://api.github.com/repos/LambdaSchool/Newsfeed-Components/forks?per_page=100&page=${i}`,{auth: auth}));
        // }

        // // Execute all requests simultaneously
        // const responseArr = await axios.all(getList);

        // // reponseArr is an array of reponses. Each Element is one of the requests
        // responseArr.forEach( (response) => {

        //     // If the status code isn't 200, something went wrong
        //     if (response.status !== 200) {
        //         console.log("REQUEST ERROR");
        //     } else {

        //         // Filter the data to only contain students that forked this project in august
        //         const filteredData = response.data.filter( (fork) => {
        //             return fork["created_at"].includes("2019-08");
        //         })

        //         filteredData.forEach( item => {
        //             userNames.push(item.owner.login);
        //         })

        //     }
        // })
        
        // //make get list
        // const getList2 = [];
        // //add user name get request to list

        // userNames.forEach( (userName) => getList2.push(axios.get(`https://api.github.com/users/${userName}`,{auth: auth})));

        // //execute all request at the same time
        // let userNamesData = await axios.all(getList2, {auth: auth})
        

        let userNamesData = [
            {
              "data": {
                "login": "TylerBiswell",
                "id": 48727035,
                "node_id": "MDQ6VXNlcjQ4NzI3MDM1",
                "avatar_url": "https://avatars2.githubusercontent.com/u/48727035?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/TylerBiswell",
                "html_url": "https://github.com/TylerBiswell",
                "followers_url": "https://api.github.com/users/TylerBiswell/followers",
                "following_url": "https://api.github.com/users/TylerBiswell/following{/other_user}",
                "gists_url": "https://api.github.com/users/TylerBiswell/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/TylerBiswell/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/TylerBiswell/subscriptions",
                "organizations_url": "https://api.github.com/users/TylerBiswell/orgs",
                "repos_url": "https://api.github.com/users/TylerBiswell/repos",
                "events_url": "https://api.github.com/users/TylerBiswell/events{/privacy}",
                "received_events_url": "https://api.github.com/users/TylerBiswell/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Tyler Biswell",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 35,
                "public_gists": 0,
                "followers": 8,
                "following": 5,
                "created_at": "2019-03-19T15:47:35Z",
                "updated_at": "2019-07-22T15:35:36Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 22 Jul 2019 15:35:36 GMT",
                "etag": "W/\"e08f48bd1de8f923d0660374df40fe54\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/TylerBiswell",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "occludedarp",
                "id": 25963665,
                "node_id": "MDQ6VXNlcjI1OTYzNjY1",
                "avatar_url": "https://avatars1.githubusercontent.com/u/25963665?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/occludedarp",
                "html_url": "https://github.com/occludedarp",
                "followers_url": "https://api.github.com/users/occludedarp/followers",
                "following_url": "https://api.github.com/users/occludedarp/following{/other_user}",
                "gists_url": "https://api.github.com/users/occludedarp/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/occludedarp/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/occludedarp/subscriptions",
                "organizations_url": "https://api.github.com/users/occludedarp/orgs",
                "repos_url": "https://api.github.com/users/occludedarp/repos",
                "events_url": "https://api.github.com/users/occludedarp/events{/privacy}",
                "received_events_url": "https://api.github.com/users/occludedarp/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2017-02-22T19:08:33Z",
                "updated_at": "2019-08-02T14:43:38Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 14:43:38 GMT",
                "etag": "W/\"ced9d8bf5b8d072ee390c07209265ad1\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/occludedarp",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "DarioLuque",
                "id": 9832573,
                "node_id": "MDQ6VXNlcjk4MzI1NzM=",
                "avatar_url": "https://avatars1.githubusercontent.com/u/9832573?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/DarioLuque",
                "html_url": "https://github.com/DarioLuque",
                "followers_url": "https://api.github.com/users/DarioLuque/followers",
                "following_url": "https://api.github.com/users/DarioLuque/following{/other_user}",
                "gists_url": "https://api.github.com/users/DarioLuque/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/DarioLuque/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/DarioLuque/subscriptions",
                "organizations_url": "https://api.github.com/users/DarioLuque/orgs",
                "repos_url": "https://api.github.com/users/DarioLuque/repos",
                "events_url": "https://api.github.com/users/DarioLuque/events{/privacy}",
                "received_events_url": "https://api.github.com/users/DarioLuque/received_events",
                "type": "User",
                "site_admin": false,
                "name": "dario luque",
                "company": null,
                "blog": "Dario-luque",
                "location": null,
                "email": "dario.lu92@gmail.com",
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 3,
                "following": 5,
                "created_at": "2014-11-18T23:16:04Z",
                "updated_at": "2019-08-02T14:33:03Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 14:33:03 GMT",
                "etag": "W/\"ce0b32719f9ffcdc578a3448e0e7ec33\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/DarioLuque",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "wais5542",
                "id": 12667453,
                "node_id": "MDQ6VXNlcjEyNjY3NDUz",
                "avatar_url": "https://avatars2.githubusercontent.com/u/12667453?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/wais5542",
                "html_url": "https://github.com/wais5542",
                "followers_url": "https://api.github.com/users/wais5542/followers",
                "following_url": "https://api.github.com/users/wais5542/following{/other_user}",
                "gists_url": "https://api.github.com/users/wais5542/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/wais5542/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/wais5542/subscriptions",
                "organizations_url": "https://api.github.com/users/wais5542/orgs",
                "repos_url": "https://api.github.com/users/wais5542/repos",
                "events_url": "https://api.github.com/users/wais5542/events{/privacy}",
                "received_events_url": "https://api.github.com/users/wais5542/received_events",
                "type": "User",
                "site_admin": false,
                "name": "WAIS A Almakaleh",
                "company": null,
                "blog": "",
                "location": "USA",
                "email": "wais5542@gmail.com",
                "hireable": null,
                "bio": "New to the programming world but already loving it!",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2015-05-30T02:17:37Z",
                "updated_at": "2019-08-07T14:39:14Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 07 Aug 2019 14:39:14 GMT",
                "etag": "W/\"b3b2943bf4560092d1bcbc8f09543db2\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/wais5542",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "knoxj1",
                "id": 45022934,
                "node_id": "MDQ6VXNlcjQ1MDIyOTM0",
                "avatar_url": "https://avatars3.githubusercontent.com/u/45022934?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/knoxj1",
                "html_url": "https://github.com/knoxj1",
                "followers_url": "https://api.github.com/users/knoxj1/followers",
                "following_url": "https://api.github.com/users/knoxj1/following{/other_user}",
                "gists_url": "https://api.github.com/users/knoxj1/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/knoxj1/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/knoxj1/subscriptions",
                "organizations_url": "https://api.github.com/users/knoxj1/orgs",
                "repos_url": "https://api.github.com/users/knoxj1/repos",
                "events_url": "https://api.github.com/users/knoxj1/events{/privacy}",
                "received_events_url": "https://api.github.com/users/knoxj1/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Knox Jarvis",
                "company": null,
                "blog": "",
                "location": "Atlanta, GA",
                "email": null,
                "hireable": null,
                "bio": "Software Engineer in training.",
                "public_repos": 38,
                "public_gists": 0,
                "followers": 5,
                "following": 8,
                "created_at": "2018-11-14T02:17:38Z",
                "updated_at": "2019-07-26T17:08:01Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 26 Jul 2019 17:08:01 GMT",
                "etag": "W/\"4c2f7cf57b7d03f8949d8f39bfe7bbc3\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/knoxj1",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Suffyan-T",
                "id": 16059907,
                "node_id": "MDQ6VXNlcjE2MDU5OTA3",
                "avatar_url": "https://avatars3.githubusercontent.com/u/16059907?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Suffyan-T",
                "html_url": "https://github.com/Suffyan-T",
                "followers_url": "https://api.github.com/users/Suffyan-T/followers",
                "following_url": "https://api.github.com/users/Suffyan-T/following{/other_user}",
                "gists_url": "https://api.github.com/users/Suffyan-T/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Suffyan-T/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Suffyan-T/subscriptions",
                "organizations_url": "https://api.github.com/users/Suffyan-T/orgs",
                "repos_url": "https://api.github.com/users/Suffyan-T/repos",
                "events_url": "https://api.github.com/users/Suffyan-T/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Suffyan-T/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Suffyan Tariq",
                "company": null,
                "blog": "",
                "location": "Sacramento, CA",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 25,
                "public_gists": 1,
                "followers": 2,
                "following": 3,
                "created_at": "2015-11-28T15:19:08Z",
                "updated_at": "2019-07-29T18:35:39Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 29 Jul 2019 18:35:39 GMT",
                "etag": "W/\"4055f241084a0a1a485d8c335fe22164\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Suffyan-T",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Bangstry",
                "id": 52711778,
                "node_id": "MDQ6VXNlcjUyNzExNzc4",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52711778?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Bangstry",
                "html_url": "https://github.com/Bangstry",
                "followers_url": "https://api.github.com/users/Bangstry/followers",
                "following_url": "https://api.github.com/users/Bangstry/following{/other_user}",
                "gists_url": "https://api.github.com/users/Bangstry/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Bangstry/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Bangstry/subscriptions",
                "organizations_url": "https://api.github.com/users/Bangstry/orgs",
                "repos_url": "https://api.github.com/users/Bangstry/repos",
                "events_url": "https://api.github.com/users/Bangstry/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Bangstry/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Tyler Quinn",
                "company": null,
                "blog": "github.com/bangstry",
                "location": "Raleigh,NC",
                "email": null,
                "hireable": null,
                "bio": "Inspiring developer, starting completely fresh.",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 7,
                "following": 5,
                "created_at": "2019-07-09T15:35:04Z",
                "updated_at": "2019-08-08T22:35:03Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 22:35:03 GMT",
                "etag": "W/\"5435cc68b32637797c1ea9e3216f26cf\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Bangstry",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "marzier",
                "id": 35053831,
                "node_id": "MDQ6VXNlcjM1MDUzODMx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/35053831?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/marzier",
                "html_url": "https://github.com/marzier",
                "followers_url": "https://api.github.com/users/marzier/followers",
                "following_url": "https://api.github.com/users/marzier/following{/other_user}",
                "gists_url": "https://api.github.com/users/marzier/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/marzier/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/marzier/subscriptions",
                "organizations_url": "https://api.github.com/users/marzier/orgs",
                "repos_url": "https://api.github.com/users/marzier/repos",
                "events_url": "https://api.github.com/users/marzier/events{/privacy}",
                "received_events_url": "https://api.github.com/users/marzier/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Nicholas Ramirez",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 19,
                "public_gists": 0,
                "followers": 2,
                "following": 0,
                "created_at": "2018-01-03T03:48:35Z",
                "updated_at": "2019-07-30T18:37:54Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 30 Jul 2019 18:37:54 GMT",
                "etag": "W/\"df2755c6bb46bfd5eee8ec22560dad97\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/marzier",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Haloking1212",
                "id": 52467406,
                "node_id": "MDQ6VXNlcjUyNDY3NDA2",
                "avatar_url": "https://avatars3.githubusercontent.com/u/52467406?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Haloking1212",
                "html_url": "https://github.com/Haloking1212",
                "followers_url": "https://api.github.com/users/Haloking1212/followers",
                "following_url": "https://api.github.com/users/Haloking1212/following{/other_user}",
                "gists_url": "https://api.github.com/users/Haloking1212/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Haloking1212/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Haloking1212/subscriptions",
                "organizations_url": "https://api.github.com/users/Haloking1212/orgs",
                "repos_url": "https://api.github.com/users/Haloking1212/repos",
                "events_url": "https://api.github.com/users/Haloking1212/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Haloking1212/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Hector Valdez",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 31,
                "public_gists": 0,
                "followers": 3,
                "following": 3,
                "created_at": "2019-07-02T18:36:37Z",
                "updated_at": "2019-08-02T15:11:07Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 15:11:07 GMT",
                "etag": "W/\"1fd5bf4e1e9f6f685ec0a3694134b0d2\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Haloking1212",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "MSquared88",
                "id": 39702456,
                "node_id": "MDQ6VXNlcjM5NzAyNDU2",
                "avatar_url": "https://avatars1.githubusercontent.com/u/39702456?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/MSquared88",
                "html_url": "https://github.com/MSquared88",
                "followers_url": "https://api.github.com/users/MSquared88/followers",
                "following_url": "https://api.github.com/users/MSquared88/following{/other_user}",
                "gists_url": "https://api.github.com/users/MSquared88/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/MSquared88/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/MSquared88/subscriptions",
                "organizations_url": "https://api.github.com/users/MSquared88/orgs",
                "repos_url": "https://api.github.com/users/MSquared88/repos",
                "events_url": "https://api.github.com/users/MSquared88/events{/privacy}",
                "received_events_url": "https://api.github.com/users/MSquared88/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Matthew Meeves",
                "company": null,
                "blog": "",
                "location": "Weatherford, TX.",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 21,
                "public_gists": 0,
                "followers": 24,
                "following": 31,
                "created_at": "2018-05-28T14:03:45Z",
                "updated_at": "2019-08-09T02:29:00Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 02:29:00 GMT",
                "etag": "W/\"4a3a240f25ae5ad1fa25606b9ac83697\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/MSquared88",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "slimylizard",
                "id": 52712470,
                "node_id": "MDQ6VXNlcjUyNzEyNDcw",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52712470?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/slimylizard",
                "html_url": "https://github.com/slimylizard",
                "followers_url": "https://api.github.com/users/slimylizard/followers",
                "following_url": "https://api.github.com/users/slimylizard/following{/other_user}",
                "gists_url": "https://api.github.com/users/slimylizard/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/slimylizard/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/slimylizard/subscriptions",
                "organizations_url": "https://api.github.com/users/slimylizard/orgs",
                "repos_url": "https://api.github.com/users/slimylizard/repos",
                "events_url": "https://api.github.com/users/slimylizard/events{/privacy}",
                "received_events_url": "https://api.github.com/users/slimylizard/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 21,
                "public_gists": 0,
                "followers": 1,
                "following": 0,
                "created_at": "2019-07-09T15:54:51Z",
                "updated_at": "2019-07-09T15:56:18Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 09 Jul 2019 15:56:18 GMT",
                "etag": "W/\"066ed78d33152bfac99299f9e4cf8f4b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/slimylizard",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "XAmi101-2",
                "id": 53066976,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjUzMDY2OTc2",
                "avatar_url": "https://avatars3.githubusercontent.com/u/53066976?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/XAmi101-2",
                "html_url": "https://github.com/XAmi101-2",
                "followers_url": "https://api.github.com/users/XAmi101-2/followers",
                "following_url": "https://api.github.com/users/XAmi101-2/following{/other_user}",
                "gists_url": "https://api.github.com/users/XAmi101-2/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/XAmi101-2/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/XAmi101-2/subscriptions",
                "organizations_url": "https://api.github.com/users/XAmi101-2/orgs",
                "repos_url": "https://api.github.com/users/XAmi101-2/repos",
                "events_url": "https://api.github.com/users/XAmi101-2/events{/privacy}",
                "received_events_url": "https://api.github.com/users/XAmi101-2/received_events",
                "type": "Organization",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 4,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2019-07-19T01:34:32Z",
                "updated_at": "2019-07-19T01:44:32Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 19 Jul 2019 01:44:32 GMT",
                "etag": "W/\"14d4525e096f486091ce488768055b8c\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/XAmi101-2",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "aaamg",
                "id": 52712672,
                "node_id": "MDQ6VXNlcjUyNzEyNjcy",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52712672?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/aaamg",
                "html_url": "https://github.com/aaamg",
                "followers_url": "https://api.github.com/users/aaamg/followers",
                "following_url": "https://api.github.com/users/aaamg/following{/other_user}",
                "gists_url": "https://api.github.com/users/aaamg/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/aaamg/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/aaamg/subscriptions",
                "organizations_url": "https://api.github.com/users/aaamg/orgs",
                "repos_url": "https://api.github.com/users/aaamg/repos",
                "events_url": "https://api.github.com/users/aaamg/events{/privacy}",
                "received_events_url": "https://api.github.com/users/aaamg/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Andrew García",
                "company": null,
                "blog": "",
                "location": "Майами, Флорида",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2019-07-09T16:01:16Z",
                "updated_at": "2019-07-31T22:02:49Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 31 Jul 2019 22:02:49 GMT",
                "etag": "W/\"5e86423e5e29c21651cc2caa267a903d\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/aaamg",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "brendantfinn",
                "id": 4721482,
                "node_id": "MDQ6VXNlcjQ3MjE0ODI=",
                "avatar_url": "https://avatars2.githubusercontent.com/u/4721482?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/brendantfinn",
                "html_url": "https://github.com/brendantfinn",
                "followers_url": "https://api.github.com/users/brendantfinn/followers",
                "following_url": "https://api.github.com/users/brendantfinn/following{/other_user}",
                "gists_url": "https://api.github.com/users/brendantfinn/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/brendantfinn/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/brendantfinn/subscriptions",
                "organizations_url": "https://api.github.com/users/brendantfinn/orgs",
                "repos_url": "https://api.github.com/users/brendantfinn/repos",
                "events_url": "https://api.github.com/users/brendantfinn/events{/privacy}",
                "received_events_url": "https://api.github.com/users/brendantfinn/received_events",
                "type": "User",
                "site_admin": false,
                "name": "brendantfinn",
                "company": null,
                "blog": "https://brendantfinn.com",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": "learning.",
                "public_repos": 28,
                "public_gists": 0,
                "followers": 1,
                "following": 4,
                "created_at": "2013-06-17T19:21:10Z",
                "updated_at": "2019-07-15T15:15:16Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 15 Jul 2019 15:15:16 GMT",
                "etag": "W/\"6dfcac6a92ec9e95bcac392cd30abc28\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/brendantfinn",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "connorholly11",
                "id": 52669492,
                "node_id": "MDQ6VXNlcjUyNjY5NDky",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52669492?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/connorholly11",
                "html_url": "https://github.com/connorholly11",
                "followers_url": "https://api.github.com/users/connorholly11/followers",
                "following_url": "https://api.github.com/users/connorholly11/following{/other_user}",
                "gists_url": "https://api.github.com/users/connorholly11/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/connorholly11/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/connorholly11/subscriptions",
                "organizations_url": "https://api.github.com/users/connorholly11/orgs",
                "repos_url": "https://api.github.com/users/connorholly11/repos",
                "events_url": "https://api.github.com/users/connorholly11/events{/privacy}",
                "received_events_url": "https://api.github.com/users/connorholly11/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Connor Holly",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 19,
                "public_gists": 0,
                "followers": 15,
                "following": 0,
                "created_at": "2019-07-08T15:30:49Z",
                "updated_at": "2019-08-08T22:26:33Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 22:26:33 GMT",
                "etag": "W/\"2eb68b2c6c5484915df6cfe3f95815b2\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/connorholly11",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Kemberly-Eliscar",
                "id": 45671862,
                "node_id": "MDQ6VXNlcjQ1NjcxODYy",
                "avatar_url": "https://avatars3.githubusercontent.com/u/45671862?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Kemberly-Eliscar",
                "html_url": "https://github.com/Kemberly-Eliscar",
                "followers_url": "https://api.github.com/users/Kemberly-Eliscar/followers",
                "following_url": "https://api.github.com/users/Kemberly-Eliscar/following{/other_user}",
                "gists_url": "https://api.github.com/users/Kemberly-Eliscar/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Kemberly-Eliscar/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Kemberly-Eliscar/subscriptions",
                "organizations_url": "https://api.github.com/users/Kemberly-Eliscar/orgs",
                "repos_url": "https://api.github.com/users/Kemberly-Eliscar/repos",
                "events_url": "https://api.github.com/users/Kemberly-Eliscar/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Kemberly-Eliscar/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 26,
                "public_gists": 0,
                "followers": 2,
                "following": 1,
                "created_at": "2018-12-06T20:39:45Z",
                "updated_at": "2019-07-24T15:50:01Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 24 Jul 2019 15:50:01 GMT",
                "etag": "W/\"ee2d75a5f7f53e097276162cb2b7e56a\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Kemberly-Eliscar",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "ampers-and",
                "id": 44625143,
                "node_id": "MDQ6VXNlcjQ0NjI1MTQz",
                "avatar_url": "https://avatars2.githubusercontent.com/u/44625143?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ampers-and",
                "html_url": "https://github.com/ampers-and",
                "followers_url": "https://api.github.com/users/ampers-and/followers",
                "following_url": "https://api.github.com/users/ampers-and/following{/other_user}",
                "gists_url": "https://api.github.com/users/ampers-and/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ampers-and/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ampers-and/subscriptions",
                "organizations_url": "https://api.github.com/users/ampers-and/orgs",
                "repos_url": "https://api.github.com/users/ampers-and/repos",
                "events_url": "https://api.github.com/users/ampers-and/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ampers-and/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Nazifa Hossain",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 19,
                "public_gists": 0,
                "followers": 5,
                "following": 4,
                "created_at": "2018-10-30T23:50:53Z",
                "updated_at": "2019-08-01T15:29:48Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 01 Aug 2019 15:29:48 GMT",
                "etag": "W/\"01c0060f2cba2ac16901cc00b64e5f3d\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/ampers-and",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "OlgaCortez",
                "id": 28116510,
                "node_id": "MDQ6VXNlcjI4MTE2NTEw",
                "avatar_url": "https://avatars2.githubusercontent.com/u/28116510?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/OlgaCortez",
                "html_url": "https://github.com/OlgaCortez",
                "followers_url": "https://api.github.com/users/OlgaCortez/followers",
                "following_url": "https://api.github.com/users/OlgaCortez/following{/other_user}",
                "gists_url": "https://api.github.com/users/OlgaCortez/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/OlgaCortez/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/OlgaCortez/subscriptions",
                "organizations_url": "https://api.github.com/users/OlgaCortez/orgs",
                "repos_url": "https://api.github.com/users/OlgaCortez/repos",
                "events_url": "https://api.github.com/users/OlgaCortez/events{/privacy}",
                "received_events_url": "https://api.github.com/users/OlgaCortez/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Olga Cortez",
                "company": "Lambda",
                "blog": "",
                "location": "Chicago, IL ",
                "email": null,
                "hireable": null,
                "bio": "Full stack web developer in the making.  ",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2017-04-27T20:07:25Z",
                "updated_at": "2019-08-02T14:45:08Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 14:45:08 GMT",
                "etag": "W/\"8ea40e67afb62c31f8fd750fdd7b8db0\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/OlgaCortez",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "bea03",
                "id": 49874012,
                "node_id": "MDQ6VXNlcjQ5ODc0MDEy",
                "avatar_url": "https://avatars0.githubusercontent.com/u/49874012?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bea03",
                "html_url": "https://github.com/bea03",
                "followers_url": "https://api.github.com/users/bea03/followers",
                "following_url": "https://api.github.com/users/bea03/following{/other_user}",
                "gists_url": "https://api.github.com/users/bea03/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bea03/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bea03/subscriptions",
                "organizations_url": "https://api.github.com/users/bea03/orgs",
                "repos_url": "https://api.github.com/users/bea03/repos",
                "events_url": "https://api.github.com/users/bea03/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bea03/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 17,
                "public_gists": 0,
                "followers": 6,
                "following": 8,
                "created_at": "2019-04-22T14:20:39Z",
                "updated_at": "2019-07-22T15:36:51Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 22 Jul 2019 15:36:51 GMT",
                "etag": "W/\"69f0266cb1a03e4309b899be02e6d405\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/bea03",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "daniela1362",
                "id": 19687605,
                "node_id": "MDQ6VXNlcjE5Njg3NjA1",
                "avatar_url": "https://avatars2.githubusercontent.com/u/19687605?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/daniela1362",
                "html_url": "https://github.com/daniela1362",
                "followers_url": "https://api.github.com/users/daniela1362/followers",
                "following_url": "https://api.github.com/users/daniela1362/following{/other_user}",
                "gists_url": "https://api.github.com/users/daniela1362/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/daniela1362/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/daniela1362/subscriptions",
                "organizations_url": "https://api.github.com/users/daniela1362/orgs",
                "repos_url": "https://api.github.com/users/daniela1362/repos",
                "events_url": "https://api.github.com/users/daniela1362/events{/privacy}",
                "received_events_url": "https://api.github.com/users/daniela1362/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 30,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2016-06-01T12:35:32Z",
                "updated_at": "2019-05-30T19:53:58Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 30 May 2019 19:53:58 GMT",
                "etag": "W/\"3289516321069167649cc8ab5e83e032\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/daniela1362",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Rilladubz",
                "id": 42902403,
                "node_id": "MDQ6VXNlcjQyOTAyNDAz",
                "avatar_url": "https://avatars2.githubusercontent.com/u/42902403?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Rilladubz",
                "html_url": "https://github.com/Rilladubz",
                "followers_url": "https://api.github.com/users/Rilladubz/followers",
                "following_url": "https://api.github.com/users/Rilladubz/following{/other_user}",
                "gists_url": "https://api.github.com/users/Rilladubz/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Rilladubz/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Rilladubz/subscriptions",
                "organizations_url": "https://api.github.com/users/Rilladubz/orgs",
                "repos_url": "https://api.github.com/users/Rilladubz/repos",
                "events_url": "https://api.github.com/users/Rilladubz/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Rilladubz/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Samuel Torres",
                "company": null,
                "blog": "",
                "location": "Los Angeles, CA",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 37,
                "public_gists": 0,
                "followers": 7,
                "following": 9,
                "created_at": "2018-09-02T02:24:54Z",
                "updated_at": "2019-07-25T12:10:09Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 25 Jul 2019 12:10:09 GMT",
                "etag": "W/\"0ab20d88092a6cb4887a5e9f32f67dc3\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Rilladubz",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "jared-kain",
                "id": 52677100,
                "node_id": "MDEyOk9yZ2FuaXphdGlvbjUyNjc3MTAw",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52677100?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jared-kain",
                "html_url": "https://github.com/jared-kain",
                "followers_url": "https://api.github.com/users/jared-kain/followers",
                "following_url": "https://api.github.com/users/jared-kain/following{/other_user}",
                "gists_url": "https://api.github.com/users/jared-kain/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jared-kain/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jared-kain/subscriptions",
                "organizations_url": "https://api.github.com/users/jared-kain/orgs",
                "repos_url": "https://api.github.com/users/jared-kain/repos",
                "events_url": "https://api.github.com/users/jared-kain/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jared-kain/received_events",
                "type": "Organization",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 4,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2019-07-08T19:34:29Z",
                "updated_at": "2019-07-08T19:34:29Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 08 Jul 2019 19:34:29 GMT",
                "etag": "W/\"3b20b15ad7f9d00010206f22a3c269ac\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/jared-kain",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "chrisbonifacio",
                "id": 16952986,
                "node_id": "MDQ6VXNlcjE2OTUyOTg2",
                "avatar_url": "https://avatars2.githubusercontent.com/u/16952986?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/chrisbonifacio",
                "html_url": "https://github.com/chrisbonifacio",
                "followers_url": "https://api.github.com/users/chrisbonifacio/followers",
                "following_url": "https://api.github.com/users/chrisbonifacio/following{/other_user}",
                "gists_url": "https://api.github.com/users/chrisbonifacio/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/chrisbonifacio/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/chrisbonifacio/subscriptions",
                "organizations_url": "https://api.github.com/users/chrisbonifacio/orgs",
                "repos_url": "https://api.github.com/users/chrisbonifacio/repos",
                "events_url": "https://api.github.com/users/chrisbonifacio/events{/privacy}",
                "received_events_url": "https://api.github.com/users/chrisbonifacio/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Chris Bonifacio",
                "company": null,
                "blog": "",
                "location": "Bronx, NY",
                "email": "christopher.bonifacio@gmail.com",
                "hireable": null,
                "bio": null,
                "public_repos": 29,
                "public_gists": 0,
                "followers": 24,
                "following": 25,
                "created_at": "2016-01-29T07:43:37Z",
                "updated_at": "2019-08-02T14:37:06Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 14:37:06 GMT",
                "etag": "W/\"602e68ffecd9279ff257dd8fef1f7a7b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/chrisbonifacio",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "NicholasInterest1",
                "id": 51211229,
                "node_id": "MDQ6VXNlcjUxMjExMjI5",
                "avatar_url": "https://avatars3.githubusercontent.com/u/51211229?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/NicholasInterest1",
                "html_url": "https://github.com/NicholasInterest1",
                "followers_url": "https://api.github.com/users/NicholasInterest1/followers",
                "following_url": "https://api.github.com/users/NicholasInterest1/following{/other_user}",
                "gists_url": "https://api.github.com/users/NicholasInterest1/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/NicholasInterest1/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/NicholasInterest1/subscriptions",
                "organizations_url": "https://api.github.com/users/NicholasInterest1/orgs",
                "repos_url": "https://api.github.com/users/NicholasInterest1/repos",
                "events_url": "https://api.github.com/users/NicholasInterest1/events{/privacy}",
                "received_events_url": "https://api.github.com/users/NicholasInterest1/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 26,
                "public_gists": 0,
                "followers": 29,
                "following": 40,
                "created_at": "2019-05-30T18:48:33Z",
                "updated_at": "2019-08-02T15:09:51Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 15:09:51 GMT",
                "etag": "W/\"8b48b5adfac310b2cd6fe4bca5854023\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/NicholasInterest1",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "adriangarcia5",
                "id": 52297070,
                "node_id": "MDQ6VXNlcjUyMjk3MDcw",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52297070?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/adriangarcia5",
                "html_url": "https://github.com/adriangarcia5",
                "followers_url": "https://api.github.com/users/adriangarcia5/followers",
                "following_url": "https://api.github.com/users/adriangarcia5/following{/other_user}",
                "gists_url": "https://api.github.com/users/adriangarcia5/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/adriangarcia5/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/adriangarcia5/subscriptions",
                "organizations_url": "https://api.github.com/users/adriangarcia5/orgs",
                "repos_url": "https://api.github.com/users/adriangarcia5/repos",
                "events_url": "https://api.github.com/users/adriangarcia5/events{/privacy}",
                "received_events_url": "https://api.github.com/users/adriangarcia5/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Adrian Garcia",
                "company": null,
                "blog": "",
                "location": "Austin, Texas",
                "email": null,
                "hireable": null,
                "bio": "hopefully my info comes out on my project :) Hello to whoever is reading this!",
                "public_repos": 20,
                "public_gists": 0,
                "followers": 20,
                "following": 31,
                "created_at": "2019-06-27T19:31:25Z",
                "updated_at": "2019-08-08T23:09:25Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 23:09:25 GMT",
                "etag": "W/\"8da5eac07e371fab6651e0d41cc261dd\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/adriangarcia5",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "chrismjohnston",
                "id": 46717850,
                "node_id": "MDQ6VXNlcjQ2NzE3ODUw",
                "avatar_url": "https://avatars3.githubusercontent.com/u/46717850?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/chrismjohnston",
                "html_url": "https://github.com/chrismjohnston",
                "followers_url": "https://api.github.com/users/chrismjohnston/followers",
                "following_url": "https://api.github.com/users/chrismjohnston/following{/other_user}",
                "gists_url": "https://api.github.com/users/chrismjohnston/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/chrismjohnston/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/chrismjohnston/subscriptions",
                "organizations_url": "https://api.github.com/users/chrismjohnston/orgs",
                "repos_url": "https://api.github.com/users/chrismjohnston/repos",
                "events_url": "https://api.github.com/users/chrismjohnston/events{/privacy}",
                "received_events_url": "https://api.github.com/users/chrismjohnston/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Christopher Johnston",
                "company": null,
                "blog": "",
                "location": "Metairie, LA",
                "email": null,
                "hireable": null,
                "bio": "Lambda School Full Stack Web Dev Student",
                "public_repos": 41,
                "public_gists": 0,
                "followers": 11,
                "following": 16,
                "created_at": "2019-01-15T15:05:24Z",
                "updated_at": "2019-08-09T00:38:50Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 00:38:50 GMT",
                "etag": "W/\"0f8fd008730ab2ae1b0fbf0d194e6a45\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/chrismjohnston",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "AdamPayne238",
                "id": 52122395,
                "node_id": "MDQ6VXNlcjUyMTIyMzk1",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52122395?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/AdamPayne238",
                "html_url": "https://github.com/AdamPayne238",
                "followers_url": "https://api.github.com/users/AdamPayne238/followers",
                "following_url": "https://api.github.com/users/AdamPayne238/following{/other_user}",
                "gists_url": "https://api.github.com/users/AdamPayne238/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/AdamPayne238/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/AdamPayne238/subscriptions",
                "organizations_url": "https://api.github.com/users/AdamPayne238/orgs",
                "repos_url": "https://api.github.com/users/AdamPayne238/repos",
                "events_url": "https://api.github.com/users/AdamPayne238/events{/privacy}",
                "received_events_url": "https://api.github.com/users/AdamPayne238/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Adam Payne",
                "company": "@lambdaschool",
                "blog": "",
                "location": "West Nyack, New York",
                "email": null,
                "hireable": null,
                "bio": "Student",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 6,
                "following": 4,
                "created_at": "2019-06-23T07:07:45Z",
                "updated_at": "2019-07-17T23:31:08Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 17 Jul 2019 23:31:08 GMT",
                "etag": "W/\"480691dcd256a1473bb8fc6320487aec\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/AdamPayne238",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "ajkizer",
                "id": 43767681,
                "node_id": "MDQ6VXNlcjQzNzY3Njgx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/43767681?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ajkizer",
                "html_url": "https://github.com/ajkizer",
                "followers_url": "https://api.github.com/users/ajkizer/followers",
                "following_url": "https://api.github.com/users/ajkizer/following{/other_user}",
                "gists_url": "https://api.github.com/users/ajkizer/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ajkizer/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ajkizer/subscriptions",
                "organizations_url": "https://api.github.com/users/ajkizer/orgs",
                "repos_url": "https://api.github.com/users/ajkizer/repos",
                "events_url": "https://api.github.com/users/ajkizer/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ajkizer/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Anthony Kizer",
                "company": null,
                "blog": "",
                "location": "Lathrop, CA",
                "email": null,
                "hireable": null,
                "bio": "Lambda School Full Stack Web Development STudent",
                "public_repos": 26,
                "public_gists": 0,
                "followers": 16,
                "following": 16,
                "created_at": "2018-10-02T00:48:06Z",
                "updated_at": "2019-08-08T22:40:16Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 22:40:16 GMT",
                "etag": "W/\"b416c9daf5c9aa9e71c4cc17c6ca0d6b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/ajkizer",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Chrismis79",
                "id": 50973422,
                "node_id": "MDQ6VXNlcjUwOTczNDIy",
                "avatar_url": "https://avatars0.githubusercontent.com/u/50973422?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Chrismis79",
                "html_url": "https://github.com/Chrismis79",
                "followers_url": "https://api.github.com/users/Chrismis79/followers",
                "following_url": "https://api.github.com/users/Chrismis79/following{/other_user}",
                "gists_url": "https://api.github.com/users/Chrismis79/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Chrismis79/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Chrismis79/subscriptions",
                "organizations_url": "https://api.github.com/users/Chrismis79/orgs",
                "repos_url": "https://api.github.com/users/Chrismis79/repos",
                "events_url": "https://api.github.com/users/Chrismis79/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Chrismis79/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Christine Fletcher",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 24,
                "public_gists": 0,
                "followers": 22,
                "following": 24,
                "created_at": "2019-05-24T01:30:40Z",
                "updated_at": "2019-08-05T17:17:05Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 17:17:05 GMT",
                "etag": "W/\"52bc836cd2a03f7b850065b6006e745e\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Chrismis79",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "danfrrr13",
                "id": 52981643,
                "node_id": "MDQ6VXNlcjUyOTgxNjQz",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52981643?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/danfrrr13",
                "html_url": "https://github.com/danfrrr13",
                "followers_url": "https://api.github.com/users/danfrrr13/followers",
                "following_url": "https://api.github.com/users/danfrrr13/following{/other_user}",
                "gists_url": "https://api.github.com/users/danfrrr13/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/danfrrr13/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/danfrrr13/subscriptions",
                "organizations_url": "https://api.github.com/users/danfrrr13/orgs",
                "repos_url": "https://api.github.com/users/danfrrr13/repos",
                "events_url": "https://api.github.com/users/danfrrr13/events{/privacy}",
                "received_events_url": "https://api.github.com/users/danfrrr13/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Daniel Ferrer",
                "company": null,
                "blog": "",
                "location": "Brooksville, FL",
                "email": null,
                "hireable": null,
                "bio": "Full-Stack Web Developer\r\nStudent at Lambda School",
                "public_repos": 13,
                "public_gists": 0,
                "followers": 5,
                "following": 5,
                "created_at": "2019-07-16T23:12:09Z",
                "updated_at": "2019-08-08T14:45:55Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 14:45:55 GMT",
                "etag": "W/\"fb8fb3dbfb71e69dd543266458265544\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/danfrrr13",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "nomadkitty",
                "id": 29263820,
                "node_id": "MDQ6VXNlcjI5MjYzODIw",
                "avatar_url": "https://avatars2.githubusercontent.com/u/29263820?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/nomadkitty",
                "html_url": "https://github.com/nomadkitty",
                "followers_url": "https://api.github.com/users/nomadkitty/followers",
                "following_url": "https://api.github.com/users/nomadkitty/following{/other_user}",
                "gists_url": "https://api.github.com/users/nomadkitty/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/nomadkitty/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/nomadkitty/subscriptions",
                "organizations_url": "https://api.github.com/users/nomadkitty/orgs",
                "repos_url": "https://api.github.com/users/nomadkitty/repos",
                "events_url": "https://api.github.com/users/nomadkitty/events{/privacy}",
                "received_events_url": "https://api.github.com/users/nomadkitty/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jojo Zhang",
                "company": null,
                "blog": "",
                "location": "Midland, MI",
                "email": "jojozhang0327@gmail.com",
                "hireable": null,
                "bio": "Lambda School Student | Full Stack Developer | twitter: @JojoZhang15",
                "public_repos": 23,
                "public_gists": 2,
                "followers": 31,
                "following": 38,
                "created_at": "2017-06-07T21:23:44Z",
                "updated_at": "2019-08-09T03:28:56Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 03:28:56 GMT",
                "etag": "W/\"f024fc70176c177a78c4996cafe8ee2e\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/nomadkitty",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "samir-hub",
                "id": 52542655,
                "node_id": "MDQ6VXNlcjUyNTQyNjU1",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52542655?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/samir-hub",
                "html_url": "https://github.com/samir-hub",
                "followers_url": "https://api.github.com/users/samir-hub/followers",
                "following_url": "https://api.github.com/users/samir-hub/following{/other_user}",
                "gists_url": "https://api.github.com/users/samir-hub/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/samir-hub/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/samir-hub/subscriptions",
                "organizations_url": "https://api.github.com/users/samir-hub/orgs",
                "repos_url": "https://api.github.com/users/samir-hub/repos",
                "events_url": "https://api.github.com/users/samir-hub/events{/privacy}",
                "received_events_url": "https://api.github.com/users/samir-hub/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Samir Lilienfeld",
                "company": null,
                "blog": "",
                "location": "North Carolina",
                "email": null,
                "hireable": null,
                "bio": "Lambda School Student",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 9,
                "following": 21,
                "created_at": "2019-07-04T16:06:20Z",
                "updated_at": "2019-08-08T19:46:52Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 19:46:52 GMT",
                "etag": "W/\"31ed8fae5e0fa4d9bb4bc2fc4a4b6e9b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/samir-hub",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "AdanRodriguez",
                "id": 51211285,
                "node_id": "MDQ6VXNlcjUxMjExMjg1",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51211285?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/AdanRodriguez",
                "html_url": "https://github.com/AdanRodriguez",
                "followers_url": "https://api.github.com/users/AdanRodriguez/followers",
                "following_url": "https://api.github.com/users/AdanRodriguez/following{/other_user}",
                "gists_url": "https://api.github.com/users/AdanRodriguez/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/AdanRodriguez/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/AdanRodriguez/subscriptions",
                "organizations_url": "https://api.github.com/users/AdanRodriguez/orgs",
                "repos_url": "https://api.github.com/users/AdanRodriguez/repos",
                "events_url": "https://api.github.com/users/AdanRodriguez/events{/privacy}",
                "received_events_url": "https://api.github.com/users/AdanRodriguez/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Adan",
                "company": null,
                "blog": "",
                "location": "Texas",
                "email": null,
                "hireable": null,
                "bio": "New to programming",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 4,
                "following": 4,
                "created_at": "2019-05-30T18:51:38Z",
                "updated_at": "2019-08-07T15:22:00Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 07 Aug 2019 15:22:00 GMT",
                "etag": "W/\"ad49c678a02e17281918048f09b19df0\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/AdanRodriguez",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "juarezfrench",
                "id": 50037288,
                "node_id": "MDQ6VXNlcjUwMDM3Mjg4",
                "avatar_url": "https://avatars1.githubusercontent.com/u/50037288?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/juarezfrench",
                "html_url": "https://github.com/juarezfrench",
                "followers_url": "https://api.github.com/users/juarezfrench/followers",
                "following_url": "https://api.github.com/users/juarezfrench/following{/other_user}",
                "gists_url": "https://api.github.com/users/juarezfrench/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/juarezfrench/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/juarezfrench/subscriptions",
                "organizations_url": "https://api.github.com/users/juarezfrench/orgs",
                "repos_url": "https://api.github.com/users/juarezfrench/repos",
                "events_url": "https://api.github.com/users/juarezfrench/events{/privacy}",
                "received_events_url": "https://api.github.com/users/juarezfrench/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Mark French",
                "company": "Lambda",
                "blog": "www.juarezfrenchdesign.com",
                "location": "Oklahoma City, OK",
                "email": null,
                "hireable": null,
                "bio": "Mark is a full stack web developer with strong front-end upstream operational experience in equity derivatives and the oilfield services sectors. ",
                "public_repos": 33,
                "public_gists": 0,
                "followers": 14,
                "following": 30,
                "created_at": "2019-04-27T02:41:14Z",
                "updated_at": "2019-07-27T14:59:40Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Sat, 27 Jul 2019 14:59:40 GMT",
                "etag": "W/\"bf4d8055590882a4c3e4ca5b025ac87a\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/juarezfrench",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "AlecThomasQuinn",
                "id": 22301129,
                "node_id": "MDQ6VXNlcjIyMzAxMTI5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/22301129?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/AlecThomasQuinn",
                "html_url": "https://github.com/AlecThomasQuinn",
                "followers_url": "https://api.github.com/users/AlecThomasQuinn/followers",
                "following_url": "https://api.github.com/users/AlecThomasQuinn/following{/other_user}",
                "gists_url": "https://api.github.com/users/AlecThomasQuinn/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/AlecThomasQuinn/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/AlecThomasQuinn/subscriptions",
                "organizations_url": "https://api.github.com/users/AlecThomasQuinn/orgs",
                "repos_url": "https://api.github.com/users/AlecThomasQuinn/repos",
                "events_url": "https://api.github.com/users/AlecThomasQuinn/events{/privacy}",
                "received_events_url": "https://api.github.com/users/AlecThomasQuinn/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Alec Thomas Quinn",
                "company": null,
                "blog": "",
                "location": null,
                "email": "alec.thomas.quinn@gmail.com",
                "hireable": null,
                "bio": "Lambda School Full Stack Web Dev",
                "public_repos": 35,
                "public_gists": 0,
                "followers": 1,
                "following": 2,
                "created_at": "2016-09-19T16:46:04Z",
                "updated_at": "2019-07-30T17:17:15Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 30 Jul 2019 17:17:15 GMT",
                "etag": "W/\"0c49544a2200bb5638b808784ce92007\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/AlecThomasQuinn",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "AceMouty",
                "id": 45374681,
                "node_id": "MDQ6VXNlcjQ1Mzc0Njgx",
                "avatar_url": "https://avatars2.githubusercontent.com/u/45374681?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/AceMouty",
                "html_url": "https://github.com/AceMouty",
                "followers_url": "https://api.github.com/users/AceMouty/followers",
                "following_url": "https://api.github.com/users/AceMouty/following{/other_user}",
                "gists_url": "https://api.github.com/users/AceMouty/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/AceMouty/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/AceMouty/subscriptions",
                "organizations_url": "https://api.github.com/users/AceMouty/orgs",
                "repos_url": "https://api.github.com/users/AceMouty/repos",
                "events_url": "https://api.github.com/users/AceMouty/events{/privacy}",
                "received_events_url": "https://api.github.com/users/AceMouty/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Kyle Guerrero",
                "company": null,
                "blog": "",
                "location": "Austin, Texas",
                "email": "kyleguerrero85@gmail.com",
                "hireable": null,
                "bio": null,
                "public_repos": 21,
                "public_gists": 0,
                "followers": 24,
                "following": 14,
                "created_at": "2018-11-26T23:27:09Z",
                "updated_at": "2019-08-07T15:16:21Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 07 Aug 2019 15:16:21 GMT",
                "etag": "W/\"704029dbd301b8bbcfb09bfb1417855b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/AceMouty",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "H4rliquinn",
                "id": 29213563,
                "node_id": "MDQ6VXNlcjI5MjEzNTYz",
                "avatar_url": "https://avatars1.githubusercontent.com/u/29213563?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/H4rliquinn",
                "html_url": "https://github.com/H4rliquinn",
                "followers_url": "https://api.github.com/users/H4rliquinn/followers",
                "following_url": "https://api.github.com/users/H4rliquinn/following{/other_user}",
                "gists_url": "https://api.github.com/users/H4rliquinn/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/H4rliquinn/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/H4rliquinn/subscriptions",
                "organizations_url": "https://api.github.com/users/H4rliquinn/orgs",
                "repos_url": "https://api.github.com/users/H4rliquinn/repos",
                "events_url": "https://api.github.com/users/H4rliquinn/events{/privacy}",
                "received_events_url": "https://api.github.com/users/H4rliquinn/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jason Sonnichsen",
                "company": null,
                "blog": "",
                "location": "Vernon, NJ",
                "email": "Harliquinn@gmail.com",
                "hireable": true,
                "bio": "On a quest of learning new skills to re-enter the technology industry after a long absence.",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 26,
                "following": 31,
                "created_at": "2017-06-05T21:19:25Z",
                "updated_at": "2019-08-08T02:16:21Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 02:16:21 GMT",
                "etag": "W/\"975b4d59b219f82268625cbfc2d90fde\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/H4rliquinn",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "mchrupcala",
                "id": 52679312,
                "node_id": "MDQ6VXNlcjUyNjc5MzEy",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52679312?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mchrupcala",
                "html_url": "https://github.com/mchrupcala",
                "followers_url": "https://api.github.com/users/mchrupcala/followers",
                "following_url": "https://api.github.com/users/mchrupcala/following{/other_user}",
                "gists_url": "https://api.github.com/users/mchrupcala/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mchrupcala/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mchrupcala/subscriptions",
                "organizations_url": "https://api.github.com/users/mchrupcala/orgs",
                "repos_url": "https://api.github.com/users/mchrupcala/repos",
                "events_url": "https://api.github.com/users/mchrupcala/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mchrupcala/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Michael",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 21,
                "following": 27,
                "created_at": "2019-07-08T21:08:26Z",
                "updated_at": "2019-07-17T23:34:23Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 17 Jul 2019 23:34:23 GMT",
                "etag": "W/\"f1735afb5b1249d6271e16580b0252c9\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/mchrupcala",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "SGonzalez44",
                "id": 52512168,
                "node_id": "MDQ6VXNlcjUyNTEyMTY4",
                "avatar_url": "https://avatars3.githubusercontent.com/u/52512168?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/SGonzalez44",
                "html_url": "https://github.com/SGonzalez44",
                "followers_url": "https://api.github.com/users/SGonzalez44/followers",
                "following_url": "https://api.github.com/users/SGonzalez44/following{/other_user}",
                "gists_url": "https://api.github.com/users/SGonzalez44/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/SGonzalez44/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/SGonzalez44/subscriptions",
                "organizations_url": "https://api.github.com/users/SGonzalez44/orgs",
                "repos_url": "https://api.github.com/users/SGonzalez44/repos",
                "events_url": "https://api.github.com/users/SGonzalez44/events{/privacy}",
                "received_events_url": "https://api.github.com/users/SGonzalez44/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Salvador Gonzalez",
                "company": "Lambda",
                "blog": "https://github.com/SGonzalez44",
                "location": "San Francisco, CA",
                "email": null,
                "hireable": null,
                "bio": "I aspire to be who I am and I am who I am. Big Sal.",
                "public_repos": 20,
                "public_gists": 0,
                "followers": 19,
                "following": 12,
                "created_at": "2019-07-03T22:12:34Z",
                "updated_at": "2019-08-08T20:29:09Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:29:09 GMT",
                "etag": "W/\"7d775eeac6717f6be2bf0604ec85665f\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/SGonzalez44",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "shweps13",
                "id": 52670061,
                "node_id": "MDQ6VXNlcjUyNjcwMDYx",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52670061?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/shweps13",
                "html_url": "https://github.com/shweps13",
                "followers_url": "https://api.github.com/users/shweps13/followers",
                "following_url": "https://api.github.com/users/shweps13/following{/other_user}",
                "gists_url": "https://api.github.com/users/shweps13/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/shweps13/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/shweps13/subscriptions",
                "organizations_url": "https://api.github.com/users/shweps13/orgs",
                "repos_url": "https://api.github.com/users/shweps13/repos",
                "events_url": "https://api.github.com/users/shweps13/events{/privacy}",
                "received_events_url": "https://api.github.com/users/shweps13/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Heorhii",
                "company": null,
                "blog": "",
                "location": "Seattle, WA",
                "email": null,
                "hireable": null,
                "bio": "That guy from bootcamp",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 7,
                "following": 11,
                "created_at": "2019-07-08T15:45:50Z",
                "updated_at": "2019-08-08T15:34:23Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 15:34:23 GMT",
                "etag": "W/\"de1bf36639ffdda3ac598b41e80131aa\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/shweps13",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "DerekEtman",
                "id": 49086915,
                "node_id": "MDQ6VXNlcjQ5MDg2OTE1",
                "avatar_url": "https://avatars3.githubusercontent.com/u/49086915?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/DerekEtman",
                "html_url": "https://github.com/DerekEtman",
                "followers_url": "https://api.github.com/users/DerekEtman/followers",
                "following_url": "https://api.github.com/users/DerekEtman/following{/other_user}",
                "gists_url": "https://api.github.com/users/DerekEtman/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/DerekEtman/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/DerekEtman/subscriptions",
                "organizations_url": "https://api.github.com/users/DerekEtman/orgs",
                "repos_url": "https://api.github.com/users/DerekEtman/repos",
                "events_url": "https://api.github.com/users/DerekEtman/events{/privacy}",
                "received_events_url": "https://api.github.com/users/DerekEtman/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Derek",
                "company": null,
                "blog": "",
                "location": "Los Angeles, California",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 23,
                "public_gists": 0,
                "followers": 30,
                "following": 25,
                "created_at": "2019-03-30T05:00:10Z",
                "updated_at": "2019-08-08T15:31:23Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 15:31:23 GMT",
                "etag": "W/\"401b1dd36759930b89e2d64c1f045e65\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/DerekEtman",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Strimnal32246",
                "id": 45864673,
                "node_id": "MDQ6VXNlcjQ1ODY0Njcz",
                "avatar_url": "https://avatars3.githubusercontent.com/u/45864673?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Strimnal32246",
                "html_url": "https://github.com/Strimnal32246",
                "followers_url": "https://api.github.com/users/Strimnal32246/followers",
                "following_url": "https://api.github.com/users/Strimnal32246/following{/other_user}",
                "gists_url": "https://api.github.com/users/Strimnal32246/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Strimnal32246/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Strimnal32246/subscriptions",
                "organizations_url": "https://api.github.com/users/Strimnal32246/orgs",
                "repos_url": "https://api.github.com/users/Strimnal32246/repos",
                "events_url": "https://api.github.com/users/Strimnal32246/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Strimnal32246/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Susan Trimnal",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 25,
                "public_gists": 0,
                "followers": 0,
                "following": 4,
                "created_at": "2018-12-14T02:43:10Z",
                "updated_at": "2019-08-05T16:59:29Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 16:59:29 GMT",
                "etag": "W/\"ea8fdc5db1410f3d669ec5d2df0bcdba\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Strimnal32246",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "sanny-io",
                "id": 3054653,
                "node_id": "MDQ6VXNlcjMwNTQ2NTM=",
                "avatar_url": "https://avatars2.githubusercontent.com/u/3054653?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/sanny-io",
                "html_url": "https://github.com/sanny-io",
                "followers_url": "https://api.github.com/users/sanny-io/followers",
                "following_url": "https://api.github.com/users/sanny-io/following{/other_user}",
                "gists_url": "https://api.github.com/users/sanny-io/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/sanny-io/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/sanny-io/subscriptions",
                "organizations_url": "https://api.github.com/users/sanny-io/orgs",
                "repos_url": "https://api.github.com/users/sanny-io/repos",
                "events_url": "https://api.github.com/users/sanny-io/events{/privacy}",
                "received_events_url": "https://api.github.com/users/sanny-io/received_events",
                "type": "User",
                "site_admin": false,
                "name": "sanny.io",
                "company": null,
                "blog": "sanny.io",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": "Programming Genius Boy Wonder",
                "public_repos": 21,
                "public_gists": 3,
                "followers": 6,
                "following": 0,
                "created_at": "2012-12-16T08:49:32Z",
                "updated_at": "2019-08-02T14:28:28Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 14:28:28 GMT",
                "etag": "W/\"00454a5df1c3868b1dcc31ce6b7e24cb\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/sanny-io",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "TamaHills",
                "id": 18063800,
                "node_id": "MDQ6VXNlcjE4MDYzODAw",
                "avatar_url": "https://avatars0.githubusercontent.com/u/18063800?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/TamaHills",
                "html_url": "https://github.com/TamaHills",
                "followers_url": "https://api.github.com/users/TamaHills/followers",
                "following_url": "https://api.github.com/users/TamaHills/following{/other_user}",
                "gists_url": "https://api.github.com/users/TamaHills/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/TamaHills/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/TamaHills/subscriptions",
                "organizations_url": "https://api.github.com/users/TamaHills/orgs",
                "repos_url": "https://api.github.com/users/TamaHills/repos",
                "events_url": "https://api.github.com/users/TamaHills/events{/privacy}",
                "received_events_url": "https://api.github.com/users/TamaHills/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Matt Masters",
                "company": null,
                "blog": "https://mattdmasters.com",
                "location": "Dallas, TX",
                "email": null,
                "hireable": null,
                "bio": "Developer // Enthusiast ",
                "public_repos": 9,
                "public_gists": 1,
                "followers": 8,
                "following": 16,
                "created_at": "2016-03-25T04:46:02Z",
                "updated_at": "2019-08-08T17:53:31Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 17:53:31 GMT",
                "etag": "W/\"b5afc10d3150c1b08da4ef3cbff16b71\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/TamaHills",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "taylorhh5",
                "id": 52665999,
                "node_id": "MDQ6VXNlcjUyNjY1OTk5",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52665999?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/taylorhh5",
                "html_url": "https://github.com/taylorhh5",
                "followers_url": "https://api.github.com/users/taylorhh5/followers",
                "following_url": "https://api.github.com/users/taylorhh5/following{/other_user}",
                "gists_url": "https://api.github.com/users/taylorhh5/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/taylorhh5/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/taylorhh5/subscriptions",
                "organizations_url": "https://api.github.com/users/taylorhh5/orgs",
                "repos_url": "https://api.github.com/users/taylorhh5/repos",
                "events_url": "https://api.github.com/users/taylorhh5/events{/privacy}",
                "received_events_url": "https://api.github.com/users/taylorhh5/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Taylor",
                "company": null,
                "blog": "",
                "location": "Virginia",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 20,
                "public_gists": 0,
                "followers": 1,
                "following": 0,
                "created_at": "2019-07-08T14:03:55Z",
                "updated_at": "2019-08-08T22:10:02Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 22:10:02 GMT",
                "etag": "W/\"18b21ab6ca21120844af4d0a4a983c62\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/taylorhh5",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "MichaelHMods",
                "id": 49282117,
                "node_id": "MDQ6VXNlcjQ5MjgyMTE3",
                "avatar_url": "https://avatars3.githubusercontent.com/u/49282117?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/MichaelHMods",
                "html_url": "https://github.com/MichaelHMods",
                "followers_url": "https://api.github.com/users/MichaelHMods/followers",
                "following_url": "https://api.github.com/users/MichaelHMods/following{/other_user}",
                "gists_url": "https://api.github.com/users/MichaelHMods/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/MichaelHMods/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/MichaelHMods/subscriptions",
                "organizations_url": "https://api.github.com/users/MichaelHMods/orgs",
                "repos_url": "https://api.github.com/users/MichaelHMods/repos",
                "events_url": "https://api.github.com/users/MichaelHMods/events{/privacy}",
                "received_events_url": "https://api.github.com/users/MichaelHMods/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Michael Guadalupe",
                "company": "Healthy Mods",
                "blog": "",
                "location": "Normal ",
                "email": null,
                "hireable": null,
                "bio": "I am challenging myself to learn to code. I eventually want to be my own boss making money for others doing something I love. ",
                "public_repos": 21,
                "public_gists": 1,
                "followers": 1,
                "following": 1,
                "created_at": "2019-04-04T14:57:07Z",
                "updated_at": "2019-07-28T00:25:43Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Sun, 28 Jul 2019 00:25:43 GMT",
                "etag": "W/\"4800675b09426d67e85d3f11abdf85f8\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/MichaelHMods",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "DanielWallen87",
                "id": 52639754,
                "node_id": "MDQ6VXNlcjUyNjM5NzU0",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52639754?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/DanielWallen87",
                "html_url": "https://github.com/DanielWallen87",
                "followers_url": "https://api.github.com/users/DanielWallen87/followers",
                "following_url": "https://api.github.com/users/DanielWallen87/following{/other_user}",
                "gists_url": "https://api.github.com/users/DanielWallen87/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/DanielWallen87/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/DanielWallen87/subscriptions",
                "organizations_url": "https://api.github.com/users/DanielWallen87/orgs",
                "repos_url": "https://api.github.com/users/DanielWallen87/repos",
                "events_url": "https://api.github.com/users/DanielWallen87/events{/privacy}",
                "received_events_url": "https://api.github.com/users/DanielWallen87/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Daniel Wallen",
                "company": null,
                "blog": "",
                "location": "Kingsport, TN",
                "email": null,
                "hireable": null,
                "bio": "Dogfather. Coffee fiend. Codes daily.",
                "public_repos": 24,
                "public_gists": 0,
                "followers": 27,
                "following": 28,
                "created_at": "2019-07-08T00:14:52Z",
                "updated_at": "2019-08-08T17:47:44Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 17:47:44 GMT",
                "etag": "W/\"608676ac5e764f2203e67a90d5b386c0\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/DanielWallen87",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "rogermcconkiejr",
                "id": 41711405,
                "node_id": "MDQ6VXNlcjQxNzExNDA1",
                "avatar_url": "https://avatars0.githubusercontent.com/u/41711405?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/rogermcconkiejr",
                "html_url": "https://github.com/rogermcconkiejr",
                "followers_url": "https://api.github.com/users/rogermcconkiejr/followers",
                "following_url": "https://api.github.com/users/rogermcconkiejr/following{/other_user}",
                "gists_url": "https://api.github.com/users/rogermcconkiejr/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/rogermcconkiejr/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/rogermcconkiejr/subscriptions",
                "organizations_url": "https://api.github.com/users/rogermcconkiejr/orgs",
                "repos_url": "https://api.github.com/users/rogermcconkiejr/repos",
                "events_url": "https://api.github.com/users/rogermcconkiejr/events{/privacy}",
                "received_events_url": "https://api.github.com/users/rogermcconkiejr/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Roger McConkie Jr",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 2,
                "following": 2,
                "created_at": "2018-07-26T01:13:09Z",
                "updated_at": "2019-08-05T16:38:42Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 16:38:42 GMT",
                "etag": "W/\"2eaacea7c24fc45960836e3c07828b1e\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/rogermcconkiejr",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "djones36",
                "id": 51124676,
                "node_id": "MDQ6VXNlcjUxMTI0Njc2",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51124676?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/djones36",
                "html_url": "https://github.com/djones36",
                "followers_url": "https://api.github.com/users/djones36/followers",
                "following_url": "https://api.github.com/users/djones36/following{/other_user}",
                "gists_url": "https://api.github.com/users/djones36/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/djones36/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/djones36/subscriptions",
                "organizations_url": "https://api.github.com/users/djones36/orgs",
                "repos_url": "https://api.github.com/users/djones36/repos",
                "events_url": "https://api.github.com/users/djones36/events{/privacy}",
                "received_events_url": "https://api.github.com/users/djones36/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Daniel Jones",
                "company": null,
                "blog": "",
                "location": "Seattle, WA",
                "email": null,
                "hireable": null,
                "bio": "Currently a front end web developer.",
                "public_repos": 20,
                "public_gists": 0,
                "followers": 5,
                "following": 6,
                "created_at": "2019-05-28T13:53:48Z",
                "updated_at": "2019-08-08T21:20:27Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 21:20:27 GMT",
                "etag": "W/\"9c92c3365ea6951d6ebb385cc1ce164a\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/djones36",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "briannakeune",
                "id": 42918544,
                "node_id": "MDQ6VXNlcjQyOTE4NTQ0",
                "avatar_url": "https://avatars3.githubusercontent.com/u/42918544?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/briannakeune",
                "html_url": "https://github.com/briannakeune",
                "followers_url": "https://api.github.com/users/briannakeune/followers",
                "following_url": "https://api.github.com/users/briannakeune/following{/other_user}",
                "gists_url": "https://api.github.com/users/briannakeune/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/briannakeune/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/briannakeune/subscriptions",
                "organizations_url": "https://api.github.com/users/briannakeune/orgs",
                "repos_url": "https://api.github.com/users/briannakeune/repos",
                "events_url": "https://api.github.com/users/briannakeune/events{/privacy}",
                "received_events_url": "https://api.github.com/users/briannakeune/received_events",
                "type": "User",
                "site_admin": false,
                "name": "briannaKeune",
                "company": null,
                "blog": "briannakeune.com",
                "location": "Milwaukee, WI",
                "email": null,
                "hireable": null,
                "bio": "Lambda Student | FullStack Dev | twitter:@BriannaKeune",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 27,
                "following": 26,
                "created_at": "2018-09-02T21:32:06Z",
                "updated_at": "2019-08-08T17:45:02Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 17:45:02 GMT",
                "etag": "W/\"5193c0dae1526160f895589e90a1554c\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/briannakeune",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "irisjitomo",
                "id": 51211167,
                "node_id": "MDQ6VXNlcjUxMjExMTY3",
                "avatar_url": "https://avatars1.githubusercontent.com/u/51211167?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/irisjitomo",
                "html_url": "https://github.com/irisjitomo",
                "followers_url": "https://api.github.com/users/irisjitomo/followers",
                "following_url": "https://api.github.com/users/irisjitomo/following{/other_user}",
                "gists_url": "https://api.github.com/users/irisjitomo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/irisjitomo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/irisjitomo/subscriptions",
                "organizations_url": "https://api.github.com/users/irisjitomo/orgs",
                "repos_url": "https://api.github.com/users/irisjitomo/repos",
                "events_url": "https://api.github.com/users/irisjitomo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/irisjitomo/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Iris Tristan Jitomo",
                "company": null,
                "blog": "",
                "location": "Georgia, USA",
                "email": null,
                "hireable": null,
                "bio": "In summer of 2019, I made a decision to become a web developer.",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 4,
                "following": 4,
                "created_at": "2019-05-30T18:46:20Z",
                "updated_at": "2019-08-08T21:58:44Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 21:58:44 GMT",
                "etag": "W/\"7e40ef422a4414d5f3b6cdcd2d6f5f3f\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/irisjitomo",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "joshua-shockley",
                "id": 52477380,
                "node_id": "MDQ6VXNlcjUyNDc3Mzgw",
                "avatar_url": "https://avatars3.githubusercontent.com/u/52477380?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/joshua-shockley",
                "html_url": "https://github.com/joshua-shockley",
                "followers_url": "https://api.github.com/users/joshua-shockley/followers",
                "following_url": "https://api.github.com/users/joshua-shockley/following{/other_user}",
                "gists_url": "https://api.github.com/users/joshua-shockley/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/joshua-shockley/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/joshua-shockley/subscriptions",
                "organizations_url": "https://api.github.com/users/joshua-shockley/orgs",
                "repos_url": "https://api.github.com/users/joshua-shockley/repos",
                "events_url": "https://api.github.com/users/joshua-shockley/events{/privacy}",
                "received_events_url": "https://api.github.com/users/joshua-shockley/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Joshua-Shockley",
                "company": null,
                "blog": "",
                "location": "Springfield, Missouri.",
                "email": null,
                "hireable": true,
                "bio": "Live and learn in Missouri. Interested in learning about many things. I love spending time with my family and doing whatever projects I find interesting",
                "public_repos": 20,
                "public_gists": 0,
                "followers": 8,
                "following": 10,
                "created_at": "2019-07-03T02:34:31Z",
                "updated_at": "2019-08-07T18:56:52Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 07 Aug 2019 18:56:52 GMT",
                "etag": "W/\"ca718f07e19ed1e76e33956fd4593dc1\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/joshua-shockley",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Sara-Alkhamri",
                "id": 43711240,
                "node_id": "MDQ6VXNlcjQzNzExMjQw",
                "avatar_url": "https://avatars1.githubusercontent.com/u/43711240?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Sara-Alkhamri",
                "html_url": "https://github.com/Sara-Alkhamri",
                "followers_url": "https://api.github.com/users/Sara-Alkhamri/followers",
                "following_url": "https://api.github.com/users/Sara-Alkhamri/following{/other_user}",
                "gists_url": "https://api.github.com/users/Sara-Alkhamri/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Sara-Alkhamri/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Sara-Alkhamri/subscriptions",
                "organizations_url": "https://api.github.com/users/Sara-Alkhamri/orgs",
                "repos_url": "https://api.github.com/users/Sara-Alkhamri/repos",
                "events_url": "https://api.github.com/users/Sara-Alkhamri/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Sara-Alkhamri/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": "Los Angeles, CA",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 20,
                "public_gists": 0,
                "followers": 2,
                "following": 3,
                "created_at": "2018-09-29T22:12:15Z",
                "updated_at": "2019-08-09T01:10:03Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 01:10:03 GMT",
                "etag": "W/\"adbe315b3d87b066dd0990e5ff09086d\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Sara-Alkhamri",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "amguenoun",
                "id": 45905506,
                "node_id": "MDQ6VXNlcjQ1OTA1NTA2",
                "avatar_url": "https://avatars0.githubusercontent.com/u/45905506?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/amguenoun",
                "html_url": "https://github.com/amguenoun",
                "followers_url": "https://api.github.com/users/amguenoun/followers",
                "following_url": "https://api.github.com/users/amguenoun/following{/other_user}",
                "gists_url": "https://api.github.com/users/amguenoun/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/amguenoun/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/amguenoun/subscriptions",
                "organizations_url": "https://api.github.com/users/amguenoun/orgs",
                "repos_url": "https://api.github.com/users/amguenoun/repos",
                "events_url": "https://api.github.com/users/amguenoun/events{/privacy}",
                "received_events_url": "https://api.github.com/users/amguenoun/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Ahmad Guenoun",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 18,
                "public_gists": 0,
                "followers": 21,
                "following": 5,
                "created_at": "2018-12-15T22:18:19Z",
                "updated_at": "2019-08-08T23:17:32Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 23:17:32 GMT",
                "etag": "W/\"ff9dcdc7b7bd22f8b7562d5314afde00\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/amguenoun",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Tyler668",
                "id": 52633530,
                "node_id": "MDQ6VXNlcjUyNjMzNTMw",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52633530?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Tyler668",
                "html_url": "https://github.com/Tyler668",
                "followers_url": "https://api.github.com/users/Tyler668/followers",
                "following_url": "https://api.github.com/users/Tyler668/following{/other_user}",
                "gists_url": "https://api.github.com/users/Tyler668/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Tyler668/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Tyler668/subscriptions",
                "organizations_url": "https://api.github.com/users/Tyler668/orgs",
                "repos_url": "https://api.github.com/users/Tyler668/repos",
                "events_url": "https://api.github.com/users/Tyler668/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Tyler668/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Tyler Gilchrist",
                "company": null,
                "blog": "",
                "location": "CT, USA",
                "email": null,
                "hireable": null,
                "bio": "Diving into the world of programming!",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 2,
                "following": 3,
                "created_at": "2019-07-07T17:36:51Z",
                "updated_at": "2019-07-07T17:51:08Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Sun, 07 Jul 2019 17:51:08 GMT",
                "etag": "W/\"8b23a1c42fae801433b34a1c84856844\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Tyler668",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "RichardEsquivel",
                "id": 48419097,
                "node_id": "MDQ6VXNlcjQ4NDE5MDk3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/48419097?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/RichardEsquivel",
                "html_url": "https://github.com/RichardEsquivel",
                "followers_url": "https://api.github.com/users/RichardEsquivel/followers",
                "following_url": "https://api.github.com/users/RichardEsquivel/following{/other_user}",
                "gists_url": "https://api.github.com/users/RichardEsquivel/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/RichardEsquivel/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/RichardEsquivel/subscriptions",
                "organizations_url": "https://api.github.com/users/RichardEsquivel/orgs",
                "repos_url": "https://api.github.com/users/RichardEsquivel/repos",
                "events_url": "https://api.github.com/users/RichardEsquivel/events{/privacy}",
                "received_events_url": "https://api.github.com/users/RichardEsquivel/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 20,
                "public_gists": 0,
                "followers": 22,
                "following": 15,
                "created_at": "2019-03-10T21:18:54Z",
                "updated_at": "2019-06-22T16:01:58Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Sat, 22 Jun 2019 16:01:58 GMT",
                "etag": "W/\"d9877b0c6507ab31c2059c258c875f49\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/RichardEsquivel",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "JulieGumerman",
                "id": 45279658,
                "node_id": "MDQ6VXNlcjQ1Mjc5NjU4",
                "avatar_url": "https://avatars2.githubusercontent.com/u/45279658?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/JulieGumerman",
                "html_url": "https://github.com/JulieGumerman",
                "followers_url": "https://api.github.com/users/JulieGumerman/followers",
                "following_url": "https://api.github.com/users/JulieGumerman/following{/other_user}",
                "gists_url": "https://api.github.com/users/JulieGumerman/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/JulieGumerman/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/JulieGumerman/subscriptions",
                "organizations_url": "https://api.github.com/users/JulieGumerman/orgs",
                "repos_url": "https://api.github.com/users/JulieGumerman/repos",
                "events_url": "https://api.github.com/users/JulieGumerman/events{/privacy}",
                "received_events_url": "https://api.github.com/users/JulieGumerman/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Julie Gumerman",
                "company": null,
                "blog": "www.juliegumerman.com",
                "location": "Colorado Springs, Colorado",
                "email": "Julie.gumerman@gmail.com",
                "hireable": true,
                "bio": "Be excellent to each other and party on...and while you're at it, write some good code.",
                "public_repos": 32,
                "public_gists": 0,
                "followers": 9,
                "following": 10,
                "created_at": "2018-11-23T04:50:39Z",
                "updated_at": "2019-08-08T20:49:28Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:49:28 GMT",
                "etag": "W/\"ceca96c6cc381bc1de5b6b4d3cd55bd5\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/JulieGumerman",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "julieantonio",
                "id": 17840774,
                "node_id": "MDQ6VXNlcjE3ODQwNzc0",
                "avatar_url": "https://avatars2.githubusercontent.com/u/17840774?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/julieantonio",
                "html_url": "https://github.com/julieantonio",
                "followers_url": "https://api.github.com/users/julieantonio/followers",
                "following_url": "https://api.github.com/users/julieantonio/following{/other_user}",
                "gists_url": "https://api.github.com/users/julieantonio/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/julieantonio/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/julieantonio/subscriptions",
                "organizations_url": "https://api.github.com/users/julieantonio/orgs",
                "repos_url": "https://api.github.com/users/julieantonio/repos",
                "events_url": "https://api.github.com/users/julieantonio/events{/privacy}",
                "received_events_url": "https://api.github.com/users/julieantonio/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Julie",
                "company": null,
                "blog": "",
                "location": "NYC",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 21,
                "public_gists": 0,
                "followers": 1,
                "following": 0,
                "created_at": "2016-03-15T01:33:32Z",
                "updated_at": "2019-07-16T21:53:17Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 16 Jul 2019 21:53:17 GMT",
                "etag": "W/\"698de4c9d9b67da22366221e8506f423\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/julieantonio",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "cvlopes88",
                "id": 52715507,
                "node_id": "MDQ6VXNlcjUyNzE1NTA3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52715507?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/cvlopes88",
                "html_url": "https://github.com/cvlopes88",
                "followers_url": "https://api.github.com/users/cvlopes88/followers",
                "following_url": "https://api.github.com/users/cvlopes88/following{/other_user}",
                "gists_url": "https://api.github.com/users/cvlopes88/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/cvlopes88/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/cvlopes88/subscriptions",
                "organizations_url": "https://api.github.com/users/cvlopes88/orgs",
                "repos_url": "https://api.github.com/users/cvlopes88/repos",
                "events_url": "https://api.github.com/users/cvlopes88/events{/privacy}",
                "received_events_url": "https://api.github.com/users/cvlopes88/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Luis Mendes",
                "company": null,
                "blog": "",
                "location": "Boston, MA",
                "email": null,
                "hireable": null,
                "bio": "Love Learning",
                "public_repos": 24,
                "public_gists": 0,
                "followers": 5,
                "following": 9,
                "created_at": "2019-07-09T17:36:59Z",
                "updated_at": "2019-08-09T00:18:37Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 00:18:37 GMT",
                "etag": "W/\"7c7834e9522bc14e1c2f2696de95b9d4\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/cvlopes88",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "B-Griffinn",
                "id": 49883273,
                "node_id": "MDQ6VXNlcjQ5ODgzMjcz",
                "avatar_url": "https://avatars0.githubusercontent.com/u/49883273?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/B-Griffinn",
                "html_url": "https://github.com/B-Griffinn",
                "followers_url": "https://api.github.com/users/B-Griffinn/followers",
                "following_url": "https://api.github.com/users/B-Griffinn/following{/other_user}",
                "gists_url": "https://api.github.com/users/B-Griffinn/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/B-Griffinn/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/B-Griffinn/subscriptions",
                "organizations_url": "https://api.github.com/users/B-Griffinn/orgs",
                "repos_url": "https://api.github.com/users/B-Griffinn/repos",
                "events_url": "https://api.github.com/users/B-Griffinn/events{/privacy}",
                "received_events_url": "https://api.github.com/users/B-Griffinn/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": "Web Developer Student @ Lambda School.",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 5,
                "following": 6,
                "created_at": "2019-04-22T20:02:32Z",
                "updated_at": "2019-08-08T20:19:53Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:19:53 GMT",
                "etag": "W/\"8148944075e0b33a4cbf391d036b75a0\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/B-Griffinn",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "BenSolt",
                "id": 52627840,
                "node_id": "MDQ6VXNlcjUyNjI3ODQw",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52627840?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/BenSolt",
                "html_url": "https://github.com/BenSolt",
                "followers_url": "https://api.github.com/users/BenSolt/followers",
                "following_url": "https://api.github.com/users/BenSolt/following{/other_user}",
                "gists_url": "https://api.github.com/users/BenSolt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/BenSolt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/BenSolt/subscriptions",
                "organizations_url": "https://api.github.com/users/BenSolt/orgs",
                "repos_url": "https://api.github.com/users/BenSolt/repos",
                "events_url": "https://api.github.com/users/BenSolt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/BenSolt/received_events",
                "type": "User",
                "site_admin": false,
                "name": "BenSolt",
                "company": null,
                "blog": "https://www.linkedin.com/in/ben-solt-8447bb94/",
                "location": "Philadelphia, PA ",
                "email": null,
                "hireable": null,
                "bio": "- Attending Lambda school to become a Web Developer.\r\n- Have a Bachelors in Media Arts and Animation.\r\n- Experience with Adobe Creative Suite,  Unreal Engine",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 1,
                "following": 1,
                "created_at": "2019-07-07T13:24:16Z",
                "updated_at": "2019-08-07T13:30:05Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 07 Aug 2019 13:30:05 GMT",
                "etag": "W/\"652ad17e81274decd44d15d23357326b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/BenSolt",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "rojcewiczj",
                "id": 52579412,
                "node_id": "MDQ6VXNlcjUyNTc5NDEy",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52579412?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/rojcewiczj",
                "html_url": "https://github.com/rojcewiczj",
                "followers_url": "https://api.github.com/users/rojcewiczj/followers",
                "following_url": "https://api.github.com/users/rojcewiczj/following{/other_user}",
                "gists_url": "https://api.github.com/users/rojcewiczj/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/rojcewiczj/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/rojcewiczj/subscriptions",
                "organizations_url": "https://api.github.com/users/rojcewiczj/orgs",
                "repos_url": "https://api.github.com/users/rojcewiczj/repos",
                "events_url": "https://api.github.com/users/rojcewiczj/events{/privacy}",
                "received_events_url": "https://api.github.com/users/rojcewiczj/received_events",
                "type": "User",
                "site_admin": false,
                "name": "John Rojcewicz",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 23,
                "public_gists": 0,
                "followers": 2,
                "following": 4,
                "created_at": "2019-07-05T17:16:25Z",
                "updated_at": "2019-07-08T14:28:06Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 08 Jul 2019 14:28:06 GMT",
                "etag": "W/\"a8d195167fcf07273ad644250546c8b7\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/rojcewiczj",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "NickGonzalez04",
                "id": 48919838,
                "node_id": "MDQ6VXNlcjQ4OTE5ODM4",
                "avatar_url": "https://avatars0.githubusercontent.com/u/48919838?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/NickGonzalez04",
                "html_url": "https://github.com/NickGonzalez04",
                "followers_url": "https://api.github.com/users/NickGonzalez04/followers",
                "following_url": "https://api.github.com/users/NickGonzalez04/following{/other_user}",
                "gists_url": "https://api.github.com/users/NickGonzalez04/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/NickGonzalez04/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/NickGonzalez04/subscriptions",
                "organizations_url": "https://api.github.com/users/NickGonzalez04/orgs",
                "repos_url": "https://api.github.com/users/NickGonzalez04/repos",
                "events_url": "https://api.github.com/users/NickGonzalez04/events{/privacy}",
                "received_events_url": "https://api.github.com/users/NickGonzalez04/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Nick Gonzalez",
                "company": null,
                "blog": "",
                "location": "Fort. Lauderdale, FL",
                "email": null,
                "hireable": null,
                "bio": "Full Stack Developer Student",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 2,
                "following": 2,
                "created_at": "2019-03-25T15:08:28Z",
                "updated_at": "2019-08-09T02:48:36Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 02:48:36 GMT",
                "etag": "W/\"ecc528207203c5994b8e868bc0d0527e\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/NickGonzalez04",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "drewgoenner",
                "id": 52584951,
                "node_id": "MDQ6VXNlcjUyNTg0OTUx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/52584951?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/drewgoenner",
                "html_url": "https://github.com/drewgoenner",
                "followers_url": "https://api.github.com/users/drewgoenner/followers",
                "following_url": "https://api.github.com/users/drewgoenner/following{/other_user}",
                "gists_url": "https://api.github.com/users/drewgoenner/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/drewgoenner/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/drewgoenner/subscriptions",
                "organizations_url": "https://api.github.com/users/drewgoenner/orgs",
                "repos_url": "https://api.github.com/users/drewgoenner/repos",
                "events_url": "https://api.github.com/users/drewgoenner/events{/privacy}",
                "received_events_url": "https://api.github.com/users/drewgoenner/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Andrew Goenner",
                "company": null,
                "blog": "",
                "location": "St. Cloud, MN",
                "email": null,
                "hireable": null,
                "bio": "Previously a stay at home dad, I have recently rekindled my love of all things WebDev.",
                "public_repos": 23,
                "public_gists": 0,
                "followers": 23,
                "following": 22,
                "created_at": "2019-07-05T22:15:34Z",
                "updated_at": "2019-08-08T20:42:53Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:42:53 GMT",
                "etag": "W/\"10de834699047a179caf769ae87944b6\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/drewgoenner",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "ichinaemere",
                "id": 48325106,
                "node_id": "MDQ6VXNlcjQ4MzI1MTA2",
                "avatar_url": "https://avatars3.githubusercontent.com/u/48325106?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ichinaemere",
                "html_url": "https://github.com/ichinaemere",
                "followers_url": "https://api.github.com/users/ichinaemere/followers",
                "following_url": "https://api.github.com/users/ichinaemere/following{/other_user}",
                "gists_url": "https://api.github.com/users/ichinaemere/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ichinaemere/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ichinaemere/subscriptions",
                "organizations_url": "https://api.github.com/users/ichinaemere/orgs",
                "repos_url": "https://api.github.com/users/ichinaemere/repos",
                "events_url": "https://api.github.com/users/ichinaemere/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ichinaemere/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 7,
                "following": 8,
                "created_at": "2019-03-07T14:56:23Z",
                "updated_at": "2019-08-08T18:16:44Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 18:16:44 GMT",
                "etag": "W/\"55f94fd5d1a79d05b209212035a0f7d1\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/ichinaemere",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "allisonkydy",
                "id": 31572415,
                "node_id": "MDQ6VXNlcjMxNTcyNDE1",
                "avatar_url": "https://avatars2.githubusercontent.com/u/31572415?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/allisonkydy",
                "html_url": "https://github.com/allisonkydy",
                "followers_url": "https://api.github.com/users/allisonkydy/followers",
                "following_url": "https://api.github.com/users/allisonkydy/following{/other_user}",
                "gists_url": "https://api.github.com/users/allisonkydy/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/allisonkydy/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/allisonkydy/subscriptions",
                "organizations_url": "https://api.github.com/users/allisonkydy/orgs",
                "repos_url": "https://api.github.com/users/allisonkydy/repos",
                "events_url": "https://api.github.com/users/allisonkydy/events{/privacy}",
                "received_events_url": "https://api.github.com/users/allisonkydy/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Allison Donnelly",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": "null",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 34,
                "following": 44,
                "created_at": "2017-09-02T17:23:43Z",
                "updated_at": "2019-08-08T22:04:18Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 22:04:18 GMT",
                "etag": "W/\"6ec283856a0cf1bf96319420ece5e0b8\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/allisonkydy",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "teddyhn",
                "id": 52614467,
                "node_id": "MDQ6VXNlcjUyNjE0NDY3",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52614467?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/teddyhn",
                "html_url": "https://github.com/teddyhn",
                "followers_url": "https://api.github.com/users/teddyhn/followers",
                "following_url": "https://api.github.com/users/teddyhn/following{/other_user}",
                "gists_url": "https://api.github.com/users/teddyhn/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/teddyhn/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/teddyhn/subscriptions",
                "organizations_url": "https://api.github.com/users/teddyhn/orgs",
                "repos_url": "https://api.github.com/users/teddyhn/repos",
                "events_url": "https://api.github.com/users/teddyhn/events{/privacy}",
                "received_events_url": "https://api.github.com/users/teddyhn/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Theodore Ngo",
                "company": "@LambdaSchool",
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 19,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2019-07-07T01:34:34Z",
                "updated_at": "2019-08-06T15:26:44Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 06 Aug 2019 15:26:44 GMT",
                "etag": "W/\"07d9cb6cf43147a092794268e66021cc\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/teddyhn",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "zpallday",
                "id": 24798134,
                "node_id": "MDQ6VXNlcjI0Nzk4MTM0",
                "avatar_url": "https://avatars0.githubusercontent.com/u/24798134?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/zpallday",
                "html_url": "https://github.com/zpallday",
                "followers_url": "https://api.github.com/users/zpallday/followers",
                "following_url": "https://api.github.com/users/zpallday/following{/other_user}",
                "gists_url": "https://api.github.com/users/zpallday/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/zpallday/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/zpallday/subscriptions",
                "organizations_url": "https://api.github.com/users/zpallday/orgs",
                "repos_url": "https://api.github.com/users/zpallday/repos",
                "events_url": "https://api.github.com/users/zpallday/events{/privacy}",
                "received_events_url": "https://api.github.com/users/zpallday/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 23,
                "public_gists": 0,
                "followers": 1,
                "following": 1,
                "created_at": "2016-12-27T20:01:59Z",
                "updated_at": "2019-08-05T15:40:00Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 15:40:00 GMT",
                "etag": "W/\"8b28e7581168c5d5d21571d448617701\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/zpallday",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Cerberean",
                "id": 47870832,
                "node_id": "MDQ6VXNlcjQ3ODcwODMy",
                "avatar_url": "https://avatars0.githubusercontent.com/u/47870832?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Cerberean",
                "html_url": "https://github.com/Cerberean",
                "followers_url": "https://api.github.com/users/Cerberean/followers",
                "following_url": "https://api.github.com/users/Cerberean/following{/other_user}",
                "gists_url": "https://api.github.com/users/Cerberean/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Cerberean/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Cerberean/subscriptions",
                "organizations_url": "https://api.github.com/users/Cerberean/orgs",
                "repos_url": "https://api.github.com/users/Cerberean/repos",
                "events_url": "https://api.github.com/users/Cerberean/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Cerberean/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Christopher Hernandez",
                "company": null,
                "blog": "",
                "location": "California",
                "email": null,
                "hireable": null,
                "bio": "Web Developer Student",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 4,
                "following": 4,
                "created_at": "2019-02-21T21:45:58Z",
                "updated_at": "2019-08-09T01:40:11Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 01:40:11 GMT",
                "etag": "W/\"1977ebc0966bdfac6b43de749a9d2802\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Cerberean",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "jeffreywhitaker",
                "id": 52683769,
                "node_id": "MDQ6VXNlcjUyNjgzNzY5",
                "avatar_url": "https://avatars3.githubusercontent.com/u/52683769?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jeffreywhitaker",
                "html_url": "https://github.com/jeffreywhitaker",
                "followers_url": "https://api.github.com/users/jeffreywhitaker/followers",
                "following_url": "https://api.github.com/users/jeffreywhitaker/following{/other_user}",
                "gists_url": "https://api.github.com/users/jeffreywhitaker/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jeffreywhitaker/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jeffreywhitaker/subscriptions",
                "organizations_url": "https://api.github.com/users/jeffreywhitaker/orgs",
                "repos_url": "https://api.github.com/users/jeffreywhitaker/repos",
                "events_url": "https://api.github.com/users/jeffreywhitaker/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jeffreywhitaker/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jeffrey Whitaker",
                "company": null,
                "blog": "",
                "location": "Oregon",
                "email": null,
                "hireable": null,
                "bio": "Lambda School student, Web22",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 7,
                "following": 7,
                "created_at": "2019-07-09T01:15:29Z",
                "updated_at": "2019-08-08T15:34:32Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 15:34:32 GMT",
                "etag": "W/\"6d505a7e5e7e66b865e380a445fe2f1f\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/jeffreywhitaker",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "JustineFR",
                "id": 23156504,
                "node_id": "MDQ6VXNlcjIzMTU2NTA0",
                "avatar_url": "https://avatars3.githubusercontent.com/u/23156504?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/JustineFR",
                "html_url": "https://github.com/JustineFR",
                "followers_url": "https://api.github.com/users/JustineFR/followers",
                "following_url": "https://api.github.com/users/JustineFR/following{/other_user}",
                "gists_url": "https://api.github.com/users/JustineFR/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/JustineFR/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/JustineFR/subscriptions",
                "organizations_url": "https://api.github.com/users/JustineFR/orgs",
                "repos_url": "https://api.github.com/users/JustineFR/repos",
                "events_url": "https://api.github.com/users/JustineFR/events{/privacy}",
                "received_events_url": "https://api.github.com/users/JustineFR/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Justine",
                "company": null,
                "blog": "",
                "location": "Austin, TX",
                "email": null,
                "hireable": null,
                "bio": "Web Developer",
                "public_repos": 36,
                "public_gists": 0,
                "followers": 4,
                "following": 2,
                "created_at": "2016-10-30T21:30:59Z",
                "updated_at": "2019-08-09T01:30:05Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 01:30:05 GMT",
                "etag": "W/\"08f9792d052aa39a629fd342a76dc83d\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/JustineFR",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "JaxAtwood",
                "id": 52709784,
                "node_id": "MDQ6VXNlcjUyNzA5Nzg0",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52709784?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/JaxAtwood",
                "html_url": "https://github.com/JaxAtwood",
                "followers_url": "https://api.github.com/users/JaxAtwood/followers",
                "following_url": "https://api.github.com/users/JaxAtwood/following{/other_user}",
                "gists_url": "https://api.github.com/users/JaxAtwood/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/JaxAtwood/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/JaxAtwood/subscriptions",
                "organizations_url": "https://api.github.com/users/JaxAtwood/orgs",
                "repos_url": "https://api.github.com/users/JaxAtwood/repos",
                "events_url": "https://api.github.com/users/JaxAtwood/events{/privacy}",
                "received_events_url": "https://api.github.com/users/JaxAtwood/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jackie Atwood",
                "company": null,
                "blog": "",
                "location": "Florida",
                "email": null,
                "hireable": null,
                "bio": "Gamer, coding student, mother of an awesome little girl, proud Finn, and metal head...",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 26,
                "following": 31,
                "created_at": "2019-07-09T14:36:37Z",
                "updated_at": "2019-08-07T15:50:40Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 07 Aug 2019 15:50:40 GMT",
                "etag": "W/\"0ac85bfcba003706a8f26572e24d90d9\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/JaxAtwood",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "gdhaliwal22",
                "id": 47346292,
                "node_id": "MDQ6VXNlcjQ3MzQ2Mjky",
                "avatar_url": "https://avatars1.githubusercontent.com/u/47346292?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/gdhaliwal22",
                "html_url": "https://github.com/gdhaliwal22",
                "followers_url": "https://api.github.com/users/gdhaliwal22/followers",
                "following_url": "https://api.github.com/users/gdhaliwal22/following{/other_user}",
                "gists_url": "https://api.github.com/users/gdhaliwal22/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/gdhaliwal22/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/gdhaliwal22/subscriptions",
                "organizations_url": "https://api.github.com/users/gdhaliwal22/orgs",
                "repos_url": "https://api.github.com/users/gdhaliwal22/repos",
                "events_url": "https://api.github.com/users/gdhaliwal22/events{/privacy}",
                "received_events_url": "https://api.github.com/users/gdhaliwal22/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 21,
                "public_gists": 1,
                "followers": 5,
                "following": 10,
                "created_at": "2019-02-05T06:51:48Z",
                "updated_at": "2019-08-05T17:07:07Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 17:07:07 GMT",
                "etag": "W/\"1cae89d8edbef44529b423a28b53c58f\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/gdhaliwal22",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "ryanZiegenfus",
                "id": 49294971,
                "node_id": "MDQ6VXNlcjQ5Mjk0OTcx",
                "avatar_url": "https://avatars1.githubusercontent.com/u/49294971?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ryanZiegenfus",
                "html_url": "https://github.com/ryanZiegenfus",
                "followers_url": "https://api.github.com/users/ryanZiegenfus/followers",
                "following_url": "https://api.github.com/users/ryanZiegenfus/following{/other_user}",
                "gists_url": "https://api.github.com/users/ryanZiegenfus/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ryanZiegenfus/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ryanZiegenfus/subscriptions",
                "organizations_url": "https://api.github.com/users/ryanZiegenfus/orgs",
                "repos_url": "https://api.github.com/users/ryanZiegenfus/repos",
                "events_url": "https://api.github.com/users/ryanZiegenfus/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ryanZiegenfus/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Ryan Ziegenfus",
                "company": null,
                "blog": "",
                "location": "Fort Myers, FL",
                "email": null,
                "hireable": null,
                "bio": "Full Stack Developer",
                "public_repos": 22,
                "public_gists": 0,
                "followers": 6,
                "following": 7,
                "created_at": "2019-04-05T00:36:15Z",
                "updated_at": "2019-08-08T21:04:44Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 21:04:44 GMT",
                "etag": "W/\"35e946e491ffc452eba5e78cfdc7d050\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/ryanZiegenfus",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "ajflowers",
                "id": 16947614,
                "node_id": "MDQ6VXNlcjE2OTQ3NjE0",
                "avatar_url": "https://avatars0.githubusercontent.com/u/16947614?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ajflowers",
                "html_url": "https://github.com/ajflowers",
                "followers_url": "https://api.github.com/users/ajflowers/followers",
                "following_url": "https://api.github.com/users/ajflowers/following{/other_user}",
                "gists_url": "https://api.github.com/users/ajflowers/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ajflowers/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ajflowers/subscriptions",
                "organizations_url": "https://api.github.com/users/ajflowers/orgs",
                "repos_url": "https://api.github.com/users/ajflowers/repos",
                "events_url": "https://api.github.com/users/ajflowers/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ajflowers/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Angela Flowers",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 5,
                "following": 3,
                "created_at": "2016-01-28T23:49:02Z",
                "updated_at": "2019-07-29T15:12:52Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 29 Jul 2019 15:12:52 GMT",
                "etag": "W/\"03ee3092f227ff2e896d626631e87edd\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/ajflowers",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "huangm96",
                "id": 51139311,
                "node_id": "MDQ6VXNlcjUxMTM5MzEx",
                "avatar_url": "https://avatars0.githubusercontent.com/u/51139311?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/huangm96",
                "html_url": "https://github.com/huangm96",
                "followers_url": "https://api.github.com/users/huangm96/followers",
                "following_url": "https://api.github.com/users/huangm96/following{/other_user}",
                "gists_url": "https://api.github.com/users/huangm96/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/huangm96/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/huangm96/subscriptions",
                "organizations_url": "https://api.github.com/users/huangm96/orgs",
                "repos_url": "https://api.github.com/users/huangm96/repos",
                "events_url": "https://api.github.com/users/huangm96/events{/privacy}",
                "received_events_url": "https://api.github.com/users/huangm96/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Min Huang",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 21,
                "public_gists": 0,
                "followers": 15,
                "following": 17,
                "created_at": "2019-05-28T22:20:51Z",
                "updated_at": "2019-07-30T15:29:20Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 30 Jul 2019 15:29:20 GMT",
                "etag": "W/\"9e612cc01171f3614938749c4a1f173d\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/huangm96",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "TaranMNeeld",
                "id": 45437093,
                "node_id": "MDQ6VXNlcjQ1NDM3MDkz",
                "avatar_url": "https://avatars3.githubusercontent.com/u/45437093?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/TaranMNeeld",
                "html_url": "https://github.com/TaranMNeeld",
                "followers_url": "https://api.github.com/users/TaranMNeeld/followers",
                "following_url": "https://api.github.com/users/TaranMNeeld/following{/other_user}",
                "gists_url": "https://api.github.com/users/TaranMNeeld/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/TaranMNeeld/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/TaranMNeeld/subscriptions",
                "organizations_url": "https://api.github.com/users/TaranMNeeld/orgs",
                "repos_url": "https://api.github.com/users/TaranMNeeld/repos",
                "events_url": "https://api.github.com/users/TaranMNeeld/events{/privacy}",
                "received_events_url": "https://api.github.com/users/TaranMNeeld/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Taran Neeld",
                "company": "None",
                "blog": "https://github.com/TaranMNeeld",
                "location": "Stephens City, VA, USA",
                "email": null,
                "hireable": null,
                "bio": "I aspire to be a professional Software Engineer, and I love to help others learn the craft.",
                "public_repos": 22,
                "public_gists": 1,
                "followers": 6,
                "following": 6,
                "created_at": "2018-11-28T19:52:50Z",
                "updated_at": "2019-08-08T20:32:15Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:32:15 GMT",
                "etag": "W/\"b1015bfaf4820a4d95a7aae7234ad808\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/TaranMNeeld",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "brandonharris177",
                "id": 50215893,
                "node_id": "MDQ6VXNlcjUwMjE1ODkz",
                "avatar_url": "https://avatars1.githubusercontent.com/u/50215893?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/brandonharris177",
                "html_url": "https://github.com/brandonharris177",
                "followers_url": "https://api.github.com/users/brandonharris177/followers",
                "following_url": "https://api.github.com/users/brandonharris177/following{/other_user}",
                "gists_url": "https://api.github.com/users/brandonharris177/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/brandonharris177/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/brandonharris177/subscriptions",
                "organizations_url": "https://api.github.com/users/brandonharris177/orgs",
                "repos_url": "https://api.github.com/users/brandonharris177/repos",
                "events_url": "https://api.github.com/users/brandonharris177/events{/privacy}",
                "received_events_url": "https://api.github.com/users/brandonharris177/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Brandon Harris",
                "company": null,
                "blog": "",
                "location": "Salt Lake City, Utah",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 17,
                "following": 24,
                "created_at": "2019-05-02T18:36:34Z",
                "updated_at": "2019-08-08T20:17:38Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:17:38 GMT",
                "etag": "W/\"d58cde337f9a97d557e9d7f2227627f7\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/brandonharris177",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "CameronAlvarado",
                "id": 52593246,
                "node_id": "MDQ6VXNlcjUyNTkzMjQ2",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52593246?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/CameronAlvarado",
                "html_url": "https://github.com/CameronAlvarado",
                "followers_url": "https://api.github.com/users/CameronAlvarado/followers",
                "following_url": "https://api.github.com/users/CameronAlvarado/following{/other_user}",
                "gists_url": "https://api.github.com/users/CameronAlvarado/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/CameronAlvarado/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/CameronAlvarado/subscriptions",
                "organizations_url": "https://api.github.com/users/CameronAlvarado/orgs",
                "repos_url": "https://api.github.com/users/CameronAlvarado/repos",
                "events_url": "https://api.github.com/users/CameronAlvarado/events{/privacy}",
                "received_events_url": "https://api.github.com/users/CameronAlvarado/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Cameron Alvarado",
                "company": null,
                "blog": "",
                "location": "Seattle, WA",
                "email": null,
                "hireable": null,
                "bio": "Tech enthusiast helping to build the matrix.",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 4,
                "following": 5,
                "created_at": "2019-07-06T06:37:46Z",
                "updated_at": "2019-08-08T23:58:01Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 23:58:01 GMT",
                "etag": "W/\"dbbcfe492e180c68c27f4c7b108e3883\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/CameronAlvarado",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Jtmccutcheon",
                "id": 52544723,
                "node_id": "MDQ6VXNlcjUyNTQ0NzIz",
                "avatar_url": "https://avatars2.githubusercontent.com/u/52544723?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Jtmccutcheon",
                "html_url": "https://github.com/Jtmccutcheon",
                "followers_url": "https://api.github.com/users/Jtmccutcheon/followers",
                "following_url": "https://api.github.com/users/Jtmccutcheon/following{/other_user}",
                "gists_url": "https://api.github.com/users/Jtmccutcheon/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Jtmccutcheon/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Jtmccutcheon/subscriptions",
                "organizations_url": "https://api.github.com/users/Jtmccutcheon/orgs",
                "repos_url": "https://api.github.com/users/Jtmccutcheon/repos",
                "events_url": "https://api.github.com/users/Jtmccutcheon/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Jtmccutcheon/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Justin McCutcheon",
                "company": null,
                "blog": "",
                "location": "Ohio",
                "email": null,
                "hireable": true,
                "bio": "One of the top young rising developers",
                "public_repos": 19,
                "public_gists": 0,
                "followers": 3,
                "following": 3,
                "created_at": "2019-07-04T17:31:33Z",
                "updated_at": "2019-08-08T18:18:50Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 18:18:50 GMT",
                "etag": "W/\"d0afef690a79ef3531a222c8c3214c05\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Jtmccutcheon",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "jsoderborg7",
                "id": 52469600,
                "node_id": "MDQ6VXNlcjUyNDY5NjAw",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52469600?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jsoderborg7",
                "html_url": "https://github.com/jsoderborg7",
                "followers_url": "https://api.github.com/users/jsoderborg7/followers",
                "following_url": "https://api.github.com/users/jsoderborg7/following{/other_user}",
                "gists_url": "https://api.github.com/users/jsoderborg7/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jsoderborg7/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jsoderborg7/subscriptions",
                "organizations_url": "https://api.github.com/users/jsoderborg7/orgs",
                "repos_url": "https://api.github.com/users/jsoderborg7/repos",
                "events_url": "https://api.github.com/users/jsoderborg7/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jsoderborg7/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jenn Soderborg",
                "company": null,
                "blog": "",
                "location": "Utah",
                "email": null,
                "hireable": null,
                "bio": "I'm a web development student at Lambda School",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 2,
                "following": 1,
                "created_at": "2019-07-02T20:02:40Z",
                "updated_at": "2019-08-08T22:47:48Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 22:47:48 GMT",
                "etag": "W/\"5166e420647df8f6b655e56f16f4990b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/jsoderborg7",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "NicholasTruson",
                "id": 49879267,
                "node_id": "MDQ6VXNlcjQ5ODc5MjY3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/49879267?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/NicholasTruson",
                "html_url": "https://github.com/NicholasTruson",
                "followers_url": "https://api.github.com/users/NicholasTruson/followers",
                "following_url": "https://api.github.com/users/NicholasTruson/following{/other_user}",
                "gists_url": "https://api.github.com/users/NicholasTruson/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/NicholasTruson/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/NicholasTruson/subscriptions",
                "organizations_url": "https://api.github.com/users/NicholasTruson/orgs",
                "repos_url": "https://api.github.com/users/NicholasTruson/repos",
                "events_url": "https://api.github.com/users/NicholasTruson/events{/privacy}",
                "received_events_url": "https://api.github.com/users/NicholasTruson/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Nicholas Truson",
                "company": null,
                "blog": "nicholastruson.com",
                "location": "OR",
                "email": "nicholas.truson@gmail.com",
                "hireable": true,
                "bio": null,
                "public_repos": 21,
                "public_gists": 0,
                "followers": 23,
                "following": 15,
                "created_at": "2019-04-22T17:12:22Z",
                "updated_at": "2019-07-17T23:13:50Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Wed, 17 Jul 2019 23:13:50 GMT",
                "etag": "W/\"c9c45968f5a5833442246b59739daa81\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/NicholasTruson",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "jnichols93",
                "id": 51006450,
                "node_id": "MDQ6VXNlcjUxMDA2NDUw",
                "avatar_url": "https://avatars3.githubusercontent.com/u/51006450?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jnichols93",
                "html_url": "https://github.com/jnichols93",
                "followers_url": "https://api.github.com/users/jnichols93/followers",
                "following_url": "https://api.github.com/users/jnichols93/following{/other_user}",
                "gists_url": "https://api.github.com/users/jnichols93/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jnichols93/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jnichols93/subscriptions",
                "organizations_url": "https://api.github.com/users/jnichols93/orgs",
                "repos_url": "https://api.github.com/users/jnichols93/repos",
                "events_url": "https://api.github.com/users/jnichols93/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jnichols93/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Justin Nichols",
                "company": "Lambda School",
                "blog": "jnichols93.github.io",
                "location": "Minneapolis, Minnesota.",
                "email": null,
                "hireable": null,
                "bio": "Current Student @lambda School",
                "public_repos": 20,
                "public_gists": 0,
                "followers": 1,
                "following": 0,
                "created_at": "2019-05-24T20:59:27Z",
                "updated_at": "2019-08-08T17:50:11Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 17:50:11 GMT",
                "etag": "W/\"ffb6992764e1c9cb1817ae1164ad3ab1\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/jnichols93",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "etridgely",
                "id": 5757423,
                "node_id": "MDQ6VXNlcjU3NTc0MjM=",
                "avatar_url": "https://avatars2.githubusercontent.com/u/5757423?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/etridgely",
                "html_url": "https://github.com/etridgely",
                "followers_url": "https://api.github.com/users/etridgely/followers",
                "following_url": "https://api.github.com/users/etridgely/following{/other_user}",
                "gists_url": "https://api.github.com/users/etridgely/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/etridgely/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/etridgely/subscriptions",
                "organizations_url": "https://api.github.com/users/etridgely/orgs",
                "repos_url": "https://api.github.com/users/etridgely/repos",
                "events_url": "https://api.github.com/users/etridgely/events{/privacy}",
                "received_events_url": "https://api.github.com/users/etridgely/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 27,
                "public_gists": 0,
                "followers": 7,
                "following": 8,
                "created_at": "2013-10-23T15:07:03Z",
                "updated_at": "2019-08-08T14:35:37Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 14:35:37 GMT",
                "etag": "W/\"c34ed1da1ecb83ba65547490c3715b9c\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/etridgely",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "shareed",
                "id": 52832742,
                "node_id": "MDQ6VXNlcjUyODMyNzQy",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52832742?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/shareed",
                "html_url": "https://github.com/shareed",
                "followers_url": "https://api.github.com/users/shareed/followers",
                "following_url": "https://api.github.com/users/shareed/following{/other_user}",
                "gists_url": "https://api.github.com/users/shareed/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/shareed/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/shareed/subscriptions",
                "organizations_url": "https://api.github.com/users/shareed/orgs",
                "repos_url": "https://api.github.com/users/shareed/repos",
                "events_url": "https://api.github.com/users/shareed/events{/privacy}",
                "received_events_url": "https://api.github.com/users/shareed/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 4,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2019-07-12T16:15:26Z",
                "updated_at": "2019-07-21T15:46:09Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Sun, 21 Jul 2019 15:46:09 GMT",
                "etag": "W/\"02878e93a509ed49829bf7f3f3fb9cf8\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/shareed",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "lccarrier",
                "id": 26601139,
                "node_id": "MDQ6VXNlcjI2NjAxMTM5",
                "avatar_url": "https://avatars2.githubusercontent.com/u/26601139?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/lccarrier",
                "html_url": "https://github.com/lccarrier",
                "followers_url": "https://api.github.com/users/lccarrier/followers",
                "following_url": "https://api.github.com/users/lccarrier/following{/other_user}",
                "gists_url": "https://api.github.com/users/lccarrier/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/lccarrier/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/lccarrier/subscriptions",
                "organizations_url": "https://api.github.com/users/lccarrier/orgs",
                "repos_url": "https://api.github.com/users/lccarrier/repos",
                "events_url": "https://api.github.com/users/lccarrier/events{/privacy}",
                "received_events_url": "https://api.github.com/users/lccarrier/received_events",
                "type": "User",
                "site_admin": false,
                "name": "LC Carrier",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 23,
                "public_gists": 0,
                "followers": 2,
                "following": 1,
                "created_at": "2017-03-22T13:45:21Z",
                "updated_at": "2019-07-09T14:29:43Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 09 Jul 2019 14:29:43 GMT",
                "etag": "W/\"55bd20dce9653ebcee45dbb0bcee1d90\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/lccarrier",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "IslaMcN",
                "id": 51002520,
                "node_id": "MDQ6VXNlcjUxMDAyNTIw",
                "avatar_url": "https://avatars1.githubusercontent.com/u/51002520?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/IslaMcN",
                "html_url": "https://github.com/IslaMcN",
                "followers_url": "https://api.github.com/users/IslaMcN/followers",
                "following_url": "https://api.github.com/users/IslaMcN/following{/other_user}",
                "gists_url": "https://api.github.com/users/IslaMcN/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/IslaMcN/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/IslaMcN/subscriptions",
                "organizations_url": "https://api.github.com/users/IslaMcN/orgs",
                "repos_url": "https://api.github.com/users/IslaMcN/repos",
                "events_url": "https://api.github.com/users/IslaMcN/events{/privacy}",
                "received_events_url": "https://api.github.com/users/IslaMcN/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Isla McNeill",
                "company": null,
                "blog": "https://trusting-yonath-031dd2.netlify.com/",
                "location": "California",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 23,
                "public_gists": 0,
                "followers": 7,
                "following": 18,
                "created_at": "2019-05-24T19:40:29Z",
                "updated_at": "2019-08-06T21:59:38Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 06 Aug 2019 21:59:38 GMT",
                "etag": "W/\"26b7aa2787450026c4347f81b8a168e3\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/IslaMcN",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Virgil-NJ",
                "id": 48743727,
                "node_id": "MDQ6VXNlcjQ4NzQzNzI3",
                "avatar_url": "https://avatars1.githubusercontent.com/u/48743727?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Virgil-NJ",
                "html_url": "https://github.com/Virgil-NJ",
                "followers_url": "https://api.github.com/users/Virgil-NJ/followers",
                "following_url": "https://api.github.com/users/Virgil-NJ/following{/other_user}",
                "gists_url": "https://api.github.com/users/Virgil-NJ/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Virgil-NJ/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Virgil-NJ/subscriptions",
                "organizations_url": "https://api.github.com/users/Virgil-NJ/orgs",
                "repos_url": "https://api.github.com/users/Virgil-NJ/repos",
                "events_url": "https://api.github.com/users/Virgil-NJ/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Virgil-NJ/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Virgilio Rodriguez Jr",
                "company": null,
                "blog": "",
                "location": "Passaic, NJ",
                "email": null,
                "hireable": null,
                "bio": "Full Stack Web Dev Student",
                "public_repos": 27,
                "public_gists": 1,
                "followers": 1,
                "following": 6,
                "created_at": "2019-03-20T03:31:51Z",
                "updated_at": "2019-07-22T07:39:51Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 22 Jul 2019 07:39:51 GMT",
                "etag": "W/\"37e422a797f1c6c8213d6026ac63f37f\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Virgil-NJ",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "bobbyhalljr",
                "id": 29504858,
                "node_id": "MDQ6VXNlcjI5NTA0ODU4",
                "avatar_url": "https://avatars1.githubusercontent.com/u/29504858?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/bobbyhalljr",
                "html_url": "https://github.com/bobbyhalljr",
                "followers_url": "https://api.github.com/users/bobbyhalljr/followers",
                "following_url": "https://api.github.com/users/bobbyhalljr/following{/other_user}",
                "gists_url": "https://api.github.com/users/bobbyhalljr/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/bobbyhalljr/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/bobbyhalljr/subscriptions",
                "organizations_url": "https://api.github.com/users/bobbyhalljr/orgs",
                "repos_url": "https://api.github.com/users/bobbyhalljr/repos",
                "events_url": "https://api.github.com/users/bobbyhalljr/events{/privacy}",
                "received_events_url": "https://api.github.com/users/bobbyhalljr/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Bobby Leon Hall Jr ",
                "company": null,
                "blog": "bobbyleonhalljr.com",
                "location": "Westminster, Vermont ",
                "email": "bobbyhalljrcs@gmail.com",
                "hireable": true,
                "bio": "I am a awesome father, and love to code!\r\n",
                "public_repos": 24,
                "public_gists": 1,
                "followers": 6,
                "following": 6,
                "created_at": "2017-06-17T13:59:54Z",
                "updated_at": "2019-08-09T01:53:50Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 01:53:50 GMT",
                "etag": "W/\"274b03532e3e264adf4925f2e5b8f1a4\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/bobbyhalljr",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "jonsolari",
                "id": 28112414,
                "node_id": "MDQ6VXNlcjI4MTEyNDE0",
                "avatar_url": "https://avatars0.githubusercontent.com/u/28112414?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jonsolari",
                "html_url": "https://github.com/jonsolari",
                "followers_url": "https://api.github.com/users/jonsolari/followers",
                "following_url": "https://api.github.com/users/jonsolari/following{/other_user}",
                "gists_url": "https://api.github.com/users/jonsolari/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jonsolari/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jonsolari/subscriptions",
                "organizations_url": "https://api.github.com/users/jonsolari/orgs",
                "repos_url": "https://api.github.com/users/jonsolari/repos",
                "events_url": "https://api.github.com/users/jonsolari/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jonsolari/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jon Solari",
                "company": null,
                "blog": "",
                "location": "Boston, MA",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 1,
                "followers": 5,
                "following": 7,
                "created_at": "2017-04-27T17:57:14Z",
                "updated_at": "2019-08-08T21:02:48Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 21:02:48 GMT",
                "etag": "W/\"705b80383c0c30589b279b28c9b92c61\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/jonsolari",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "1professionalusername",
                "id": 43183922,
                "node_id": "MDQ6VXNlcjQzMTgzOTIy",
                "avatar_url": "https://avatars3.githubusercontent.com/u/43183922?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/1professionalusername",
                "html_url": "https://github.com/1professionalusername",
                "followers_url": "https://api.github.com/users/1professionalusername/followers",
                "following_url": "https://api.github.com/users/1professionalusername/following{/other_user}",
                "gists_url": "https://api.github.com/users/1professionalusername/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/1professionalusername/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/1professionalusername/subscriptions",
                "organizations_url": "https://api.github.com/users/1professionalusername/orgs",
                "repos_url": "https://api.github.com/users/1professionalusername/repos",
                "events_url": "https://api.github.com/users/1professionalusername/events{/privacy}",
                "received_events_url": "https://api.github.com/users/1professionalusername/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Brandon",
                "company": null,
                "blog": "",
                "location": "Austin, TX",
                "email": "jailhousejordans@gmail.com",
                "hireable": null,
                "bio": "I'm new in town.",
                "public_repos": 38,
                "public_gists": 0,
                "followers": 7,
                "following": 15,
                "created_at": "2018-09-11T18:18:08Z",
                "updated_at": "2019-07-18T15:14:12Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 18 Jul 2019 15:14:12 GMT",
                "etag": "W/\"eef435e901091199c0e89a25a9e9a665\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/1professionalusername",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "karenjli",
                "id": 47998177,
                "node_id": "MDQ6VXNlcjQ3OTk4MTc3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/47998177?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/karenjli",
                "html_url": "https://github.com/karenjli",
                "followers_url": "https://api.github.com/users/karenjli/followers",
                "following_url": "https://api.github.com/users/karenjli/following{/other_user}",
                "gists_url": "https://api.github.com/users/karenjli/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/karenjli/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/karenjli/subscriptions",
                "organizations_url": "https://api.github.com/users/karenjli/orgs",
                "repos_url": "https://api.github.com/users/karenjli/repos",
                "events_url": "https://api.github.com/users/karenjli/events{/privacy}",
                "received_events_url": "https://api.github.com/users/karenjli/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Karen Li",
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 22,
                "public_gists": 0,
                "followers": 6,
                "following": 0,
                "created_at": "2019-02-26T01:36:45Z",
                "updated_at": "2019-08-08T21:13:01Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 21:13:01 GMT",
                "etag": "W/\"01de73a1eec472a1281feee4ec126150\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/karenjli",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "deegrams221",
                "id": 39970616,
                "node_id": "MDQ6VXNlcjM5OTcwNjE2",
                "avatar_url": "https://avatars1.githubusercontent.com/u/39970616?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/deegrams221",
                "html_url": "https://github.com/deegrams221",
                "followers_url": "https://api.github.com/users/deegrams221/followers",
                "following_url": "https://api.github.com/users/deegrams221/following{/other_user}",
                "gists_url": "https://api.github.com/users/deegrams221/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/deegrams221/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/deegrams221/subscriptions",
                "organizations_url": "https://api.github.com/users/deegrams221/orgs",
                "repos_url": "https://api.github.com/users/deegrams221/repos",
                "events_url": "https://api.github.com/users/deegrams221/events{/privacy}",
                "received_events_url": "https://api.github.com/users/deegrams221/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Diana Grams",
                "company": null,
                "blog": "https://codepen.io/Dsage1/",
                "location": "Colorado, USA",
                "email": null,
                "hireable": true,
                "bio": null,
                "public_repos": 20,
                "public_gists": 0,
                "followers": 25,
                "following": 47,
                "created_at": "2018-06-05T21:34:59Z",
                "updated_at": "2019-08-08T17:47:03Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 17:47:03 GMT",
                "etag": "W/\"bce5578ae1064245d567d2e3840f51e9\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/deegrams221",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "devin5",
                "id": 51009731,
                "node_id": "MDQ6VXNlcjUxMDA5NzMx",
                "avatar_url": "https://avatars3.githubusercontent.com/u/51009731?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/devin5",
                "html_url": "https://github.com/devin5",
                "followers_url": "https://api.github.com/users/devin5/followers",
                "following_url": "https://api.github.com/users/devin5/following{/other_user}",
                "gists_url": "https://api.github.com/users/devin5/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/devin5/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/devin5/subscriptions",
                "organizations_url": "https://api.github.com/users/devin5/orgs",
                "repos_url": "https://api.github.com/users/devin5/repos",
                "events_url": "https://api.github.com/users/devin5/events{/privacy}",
                "received_events_url": "https://api.github.com/users/devin5/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Devin Dias",
                "company": null,
                "blog": "",
                "location": "Austin , Texas",
                "email": null,
                "hireable": true,
                "bio": "Student programmer studying many technologies to expand my passion! ",
                "public_repos": 24,
                "public_gists": 0,
                "followers": 7,
                "following": 6,
                "created_at": "2019-05-25T00:47:56Z",
                "updated_at": "2019-08-02T15:09:18Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 02 Aug 2019 15:09:18 GMT",
                "etag": "W/\"25da4e3a42a01969d0d8b8f9aba7d9df\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/devin5",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "otterspawdesign",
                "id": 45506160,
                "node_id": "MDQ6VXNlcjQ1NTA2MTYw",
                "avatar_url": "https://avatars3.githubusercontent.com/u/45506160?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/otterspawdesign",
                "html_url": "https://github.com/otterspawdesign",
                "followers_url": "https://api.github.com/users/otterspawdesign/followers",
                "following_url": "https://api.github.com/users/otterspawdesign/following{/other_user}",
                "gists_url": "https://api.github.com/users/otterspawdesign/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/otterspawdesign/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/otterspawdesign/subscriptions",
                "organizations_url": "https://api.github.com/users/otterspawdesign/orgs",
                "repos_url": "https://api.github.com/users/otterspawdesign/repos",
                "events_url": "https://api.github.com/users/otterspawdesign/events{/privacy}",
                "received_events_url": "https://api.github.com/users/otterspawdesign/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Melissa Kemp",
                "company": null,
                "blog": "https://otterspaw.com/",
                "location": "Idaho Falls, Idaho",
                "email": "otterspawdesign@gmail.com",
                "hireable": null,
                "bio": null,
                "public_repos": 27,
                "public_gists": 0,
                "followers": 26,
                "following": 38,
                "created_at": "2018-12-01T05:47:28Z",
                "updated_at": "2019-08-08T15:25:52Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 15:25:52 GMT",
                "etag": "W/\"d800cfd34ee0bcce5aa86180af246325\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/otterspawdesign",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "EpiceneDev",
                "id": 48662221,
                "node_id": "MDQ6VXNlcjQ4NjYyMjIx",
                "avatar_url": "https://avatars0.githubusercontent.com/u/48662221?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/EpiceneDev",
                "html_url": "https://github.com/EpiceneDev",
                "followers_url": "https://api.github.com/users/EpiceneDev/followers",
                "following_url": "https://api.github.com/users/EpiceneDev/following{/other_user}",
                "gists_url": "https://api.github.com/users/EpiceneDev/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/EpiceneDev/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/EpiceneDev/subscriptions",
                "organizations_url": "https://api.github.com/users/EpiceneDev/orgs",
                "repos_url": "https://api.github.com/users/EpiceneDev/repos",
                "events_url": "https://api.github.com/users/EpiceneDev/events{/privacy}",
                "received_events_url": "https://api.github.com/users/EpiceneDev/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": true,
                "bio": null,
                "public_repos": 38,
                "public_gists": 1,
                "followers": 19,
                "following": 37,
                "created_at": "2019-03-18T01:28:21Z",
                "updated_at": "2019-07-23T15:47:39Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 23 Jul 2019 15:47:39 GMT",
                "etag": "W/\"0e567e134aba41a685b756fc12275f71\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/EpiceneDev",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "kefimochi",
                "id": 47342588,
                "node_id": "MDQ6VXNlcjQ3MzQyNTg4",
                "avatar_url": "https://avatars1.githubusercontent.com/u/47342588?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/kefimochi",
                "html_url": "https://github.com/kefimochi",
                "followers_url": "https://api.github.com/users/kefimochi/followers",
                "following_url": "https://api.github.com/users/kefimochi/following{/other_user}",
                "gists_url": "https://api.github.com/users/kefimochi/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/kefimochi/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/kefimochi/subscriptions",
                "organizations_url": "https://api.github.com/users/kefimochi/orgs",
                "repos_url": "https://api.github.com/users/kefimochi/repos",
                "events_url": "https://api.github.com/users/kefimochi/events{/privacy}",
                "received_events_url": "https://api.github.com/users/kefimochi/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Kate Efimova",
                "company": null,
                "blog": "kefimochi.com",
                "location": "Sunnyvale, CA",
                "email": "kate.efimova0@gmail.com",
                "hireable": null,
                "bio": null,
                "public_repos": 32,
                "public_gists": 0,
                "followers": 42,
                "following": 10,
                "created_at": "2019-02-05T02:55:25Z",
                "updated_at": "2019-08-08T15:02:55Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 15:02:55 GMT",
                "etag": "W/\"37809a9e410bff5417a848366d4f9cd7\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/kefimochi",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "mharley12345",
                "id": 47269554,
                "node_id": "MDQ6VXNlcjQ3MjY5NTU0",
                "avatar_url": "https://avatars0.githubusercontent.com/u/47269554?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mharley12345",
                "html_url": "https://github.com/mharley12345",
                "followers_url": "https://api.github.com/users/mharley12345/followers",
                "following_url": "https://api.github.com/users/mharley12345/following{/other_user}",
                "gists_url": "https://api.github.com/users/mharley12345/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mharley12345/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mharley12345/subscriptions",
                "organizations_url": "https://api.github.com/users/mharley12345/orgs",
                "repos_url": "https://api.github.com/users/mharley12345/repos",
                "events_url": "https://api.github.com/users/mharley12345/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mharley12345/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Mike Harley",
                "company": null,
                "blog": "",
                "location": "Seattle, WA",
                "email": "info@mike-harley.me",
                "hireable": null,
                "bio": null,
                "public_repos": 50,
                "public_gists": 0,
                "followers": 2,
                "following": 2,
                "created_at": "2019-02-02T08:46:11Z",
                "updated_at": "2019-08-08T20:37:47Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:37:47 GMT",
                "etag": "W/\"3824f694c71646fed80116f6d449d706\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/mharley12345",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "eralpkor",
                "id": 13582770,
                "node_id": "MDQ6VXNlcjEzNTgyNzcw",
                "avatar_url": "https://avatars1.githubusercontent.com/u/13582770?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/eralpkor",
                "html_url": "https://github.com/eralpkor",
                "followers_url": "https://api.github.com/users/eralpkor/followers",
                "following_url": "https://api.github.com/users/eralpkor/following{/other_user}",
                "gists_url": "https://api.github.com/users/eralpkor/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/eralpkor/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/eralpkor/subscriptions",
                "organizations_url": "https://api.github.com/users/eralpkor/orgs",
                "repos_url": "https://api.github.com/users/eralpkor/repos",
                "events_url": "https://api.github.com/users/eralpkor/events{/privacy}",
                "received_events_url": "https://api.github.com/users/eralpkor/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Eralp Kor",
                "company": null,
                "blog": "http://www.eralpkor.com",
                "location": "Raleigh, NC",
                "email": "eralp.ny@gmail.com",
                "hireable": null,
                "bio": "Hello, I am passionate about Javascript, building great user experiences, fighting for simplicity over complexity, constantly learning and sharing.",
                "public_repos": 71,
                "public_gists": 9,
                "followers": 6,
                "following": 6,
                "created_at": "2015-07-31T05:07:38Z",
                "updated_at": "2019-08-05T16:15:23Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 16:15:23 GMT",
                "etag": "W/\"27ebc9d01dfcfa68fe4258bd675f4869\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/eralpkor",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Jonathan-YungHsin-Ho",
                "id": 49426274,
                "node_id": "MDQ6VXNlcjQ5NDI2Mjc0",
                "avatar_url": "https://avatars0.githubusercontent.com/u/49426274?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Jonathan-YungHsin-Ho",
                "html_url": "https://github.com/Jonathan-YungHsin-Ho",
                "followers_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/followers",
                "following_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/following{/other_user}",
                "gists_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/subscriptions",
                "organizations_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/orgs",
                "repos_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/repos",
                "events_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Jonathan-YungHsin-Ho/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jonathan Ho",
                "company": null,
                "blog": "https://www.linkedin.com/in/jonathan-y-ho/",
                "location": "Brooklyn, NY",
                "email": null,
                "hireable": true,
                "bio": null,
                "public_repos": 23,
                "public_gists": 0,
                "followers": 24,
                "following": 7,
                "created_at": "2019-04-09T04:50:43Z",
                "updated_at": "2019-08-05T17:14:49Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 17:14:49 GMT",
                "etag": "W/\"0407dbd703dae8cea13c0a7d91427c07\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Jonathan-YungHsin-Ho",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "yoshimii",
                "id": 2327788,
                "node_id": "MDQ6VXNlcjIzMjc3ODg=",
                "avatar_url": "https://avatars0.githubusercontent.com/u/2327788?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/yoshimii",
                "html_url": "https://github.com/yoshimii",
                "followers_url": "https://api.github.com/users/yoshimii/followers",
                "following_url": "https://api.github.com/users/yoshimii/following{/other_user}",
                "gists_url": "https://api.github.com/users/yoshimii/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/yoshimii/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/yoshimii/subscriptions",
                "organizations_url": "https://api.github.com/users/yoshimii/orgs",
                "repos_url": "https://api.github.com/users/yoshimii/repos",
                "events_url": "https://api.github.com/users/yoshimii/events{/privacy}",
                "received_events_url": "https://api.github.com/users/yoshimii/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Emma Zarate",
                "company": null,
                "blog": "www.emmazarate.dev",
                "location": "Austin, TX",
                "email": "zarate.emm@gmail.com",
                "hireable": null,
                "bio": "Lambda School student by day VanillaJS enthusiast by night. ",
                "public_repos": 33,
                "public_gists": 1,
                "followers": 13,
                "following": 17,
                "created_at": "2012-09-11T22:43:44Z",
                "updated_at": "2019-08-05T14:37:08Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 14:37:08 GMT",
                "etag": "W/\"4b5c50f48d54ddbd184699708aafa6e1\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/yoshimii",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "codenamerockey",
                "id": 37706223,
                "node_id": "MDQ6VXNlcjM3NzA2MjIz",
                "avatar_url": "https://avatars3.githubusercontent.com/u/37706223?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/codenamerockey",
                "html_url": "https://github.com/codenamerockey",
                "followers_url": "https://api.github.com/users/codenamerockey/followers",
                "following_url": "https://api.github.com/users/codenamerockey/following{/other_user}",
                "gists_url": "https://api.github.com/users/codenamerockey/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/codenamerockey/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/codenamerockey/subscriptions",
                "organizations_url": "https://api.github.com/users/codenamerockey/orgs",
                "repos_url": "https://api.github.com/users/codenamerockey/repos",
                "events_url": "https://api.github.com/users/codenamerockey/events{/privacy}",
                "received_events_url": "https://api.github.com/users/codenamerockey/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Rockey Simmons Jr",
                "company": null,
                "blog": "http://codenamerockey.com/Portfolio",
                "location": "California",
                "email": null,
                "hireable": null,
                "bio": "Web Developer and Software Engineer.",
                "public_repos": 60,
                "public_gists": 0,
                "followers": 23,
                "following": 5,
                "created_at": "2018-03-23T15:49:51Z",
                "updated_at": "2019-08-08T20:01:30Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:01:30 GMT",
                "etag": "W/\"638baa458e8e92d776cf76e294c39326\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/codenamerockey",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "LindseyCason",
                "id": 29295649,
                "node_id": "MDQ6VXNlcjI5Mjk1NjQ5",
                "avatar_url": "https://avatars1.githubusercontent.com/u/29295649?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/LindseyCason",
                "html_url": "https://github.com/LindseyCason",
                "followers_url": "https://api.github.com/users/LindseyCason/followers",
                "following_url": "https://api.github.com/users/LindseyCason/following{/other_user}",
                "gists_url": "https://api.github.com/users/LindseyCason/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/LindseyCason/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/LindseyCason/subscriptions",
                "organizations_url": "https://api.github.com/users/LindseyCason/orgs",
                "repos_url": "https://api.github.com/users/LindseyCason/repos",
                "events_url": "https://api.github.com/users/LindseyCason/events{/privacy}",
                "received_events_url": "https://api.github.com/users/LindseyCason/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Lindsey Cason",
                "company": null,
                "blog": "www.LindseyCason.com",
                "location": "New Orleans, LA",
                "email": "lindseyacason@gmail.com",
                "hireable": null,
                "bio": "Full Time Full Stack Web Dev student at Lambda.",
                "public_repos": 27,
                "public_gists": 11,
                "followers": 7,
                "following": 3,
                "created_at": "2017-06-09T02:53:40Z",
                "updated_at": "2019-08-08T23:59:23Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 23:59:23 GMT",
                "etag": "W/\"76c0de079983ee2430b70207b18e0c72\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/LindseyCason",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "jordowag",
                "id": 47953030,
                "node_id": "MDQ6VXNlcjQ3OTUzMDMw",
                "avatar_url": "https://avatars0.githubusercontent.com/u/47953030?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/jordowag",
                "html_url": "https://github.com/jordowag",
                "followers_url": "https://api.github.com/users/jordowag/followers",
                "following_url": "https://api.github.com/users/jordowag/following{/other_user}",
                "gists_url": "https://api.github.com/users/jordowag/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/jordowag/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/jordowag/subscriptions",
                "organizations_url": "https://api.github.com/users/jordowag/orgs",
                "repos_url": "https://api.github.com/users/jordowag/repos",
                "events_url": "https://api.github.com/users/jordowag/events{/privacy}",
                "received_events_url": "https://api.github.com/users/jordowag/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Jordan",
                "company": null,
                "blog": "https://www.linkedin.com/in/jordan-doan-790694156/",
                "location": "Seattle, WA",
                "email": null,
                "hireable": null,
                "bio": "Learning ",
                "public_repos": 23,
                "public_gists": 0,
                "followers": 1,
                "following": 0,
                "created_at": "2019-02-24T21:06:25Z",
                "updated_at": "2019-08-09T07:13:44Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 07:13:44 GMT",
                "etag": "W/\"1e3bfb5400e6d918f5501f71dff298e2\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/jordowag",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "TishaHolder",
                "id": 50963507,
                "node_id": "MDQ6VXNlcjUwOTYzNTA3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/50963507?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/TishaHolder",
                "html_url": "https://github.com/TishaHolder",
                "followers_url": "https://api.github.com/users/TishaHolder/followers",
                "following_url": "https://api.github.com/users/TishaHolder/following{/other_user}",
                "gists_url": "https://api.github.com/users/TishaHolder/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/TishaHolder/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/TishaHolder/subscriptions",
                "organizations_url": "https://api.github.com/users/TishaHolder/orgs",
                "repos_url": "https://api.github.com/users/TishaHolder/repos",
                "events_url": "https://api.github.com/users/TishaHolder/events{/privacy}",
                "received_events_url": "https://api.github.com/users/TishaHolder/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Tisha Holder",
                "company": null,
                "blog": "https://tishaholder.github.io/",
                "location": "CT",
                "email": null,
                "hireable": null,
                "bio": "Full Stack Web Development Student",
                "public_repos": 20,
                "public_gists": 0,
                "followers": 2,
                "following": 0,
                "created_at": "2019-05-23T17:33:10Z",
                "updated_at": "2019-08-08T23:07:46Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 23:07:46 GMT",
                "etag": "W/\"2965c405d510f1d12a48be42ec756fb3\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/TishaHolder",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "LoralieFlint",
                "id": 45647045,
                "node_id": "MDQ6VXNlcjQ1NjQ3MDQ1",
                "avatar_url": "https://avatars1.githubusercontent.com/u/45647045?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/LoralieFlint",
                "html_url": "https://github.com/LoralieFlint",
                "followers_url": "https://api.github.com/users/LoralieFlint/followers",
                "following_url": "https://api.github.com/users/LoralieFlint/following{/other_user}",
                "gists_url": "https://api.github.com/users/LoralieFlint/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/LoralieFlint/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/LoralieFlint/subscriptions",
                "organizations_url": "https://api.github.com/users/LoralieFlint/orgs",
                "repos_url": "https://api.github.com/users/LoralieFlint/repos",
                "events_url": "https://api.github.com/users/LoralieFlint/events{/privacy}",
                "received_events_url": "https://api.github.com/users/LoralieFlint/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Loralie Flint",
                "company": null,
                "blog": "",
                "location": "Sandy UT",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 20,
                "public_gists": 0,
                "followers": 1,
                "following": 2,
                "created_at": "2018-12-06T03:11:02Z",
                "updated_at": "2019-08-08T23:27:16Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 23:27:16 GMT",
                "etag": "W/\"6038547c5653cfd1e855b80daf8e85d4\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/LoralieFlint",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "michelangeloxo",
                "id": 52550247,
                "node_id": "MDQ6VXNlcjUyNTUwMjQ3",
                "avatar_url": "https://avatars1.githubusercontent.com/u/52550247?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/michelangeloxo",
                "html_url": "https://github.com/michelangeloxo",
                "followers_url": "https://api.github.com/users/michelangeloxo/followers",
                "following_url": "https://api.github.com/users/michelangeloxo/following{/other_user}",
                "gists_url": "https://api.github.com/users/michelangeloxo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/michelangeloxo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/michelangeloxo/subscriptions",
                "organizations_url": "https://api.github.com/users/michelangeloxo/orgs",
                "repos_url": "https://api.github.com/users/michelangeloxo/repos",
                "events_url": "https://api.github.com/users/michelangeloxo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/michelangeloxo/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Michael Demery",
                "company": null,
                "blog": "",
                "location": "Fullerton California",
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 18,
                "public_gists": 0,
                "followers": 8,
                "following": 9,
                "created_at": "2019-07-04T22:40:56Z",
                "updated_at": "2019-08-05T17:20:43Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 17:20:43 GMT",
                "etag": "W/\"7765467f072292075d99feff084aaa0b\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/michelangeloxo",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "raajnpatel",
                "id": 48343200,
                "node_id": "MDQ6VXNlcjQ4MzQzMjAw",
                "avatar_url": "https://avatars3.githubusercontent.com/u/48343200?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/raajnpatel",
                "html_url": "https://github.com/raajnpatel",
                "followers_url": "https://api.github.com/users/raajnpatel/followers",
                "following_url": "https://api.github.com/users/raajnpatel/following{/other_user}",
                "gists_url": "https://api.github.com/users/raajnpatel/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/raajnpatel/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/raajnpatel/subscriptions",
                "organizations_url": "https://api.github.com/users/raajnpatel/orgs",
                "repos_url": "https://api.github.com/users/raajnpatel/repos",
                "events_url": "https://api.github.com/users/raajnpatel/events{/privacy}",
                "received_events_url": "https://api.github.com/users/raajnpatel/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Raajn Patel",
                "company": null,
                "blog": "raajnpatel.com",
                "location": "California",
                "email": null,
                "hireable": null,
                "bio": "I love my pup, Olive. That is all.",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 11,
                "following": 13,
                "created_at": "2019-03-08T04:40:36Z",
                "updated_at": "2019-08-09T01:02:55Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 01:02:55 GMT",
                "etag": "W/\"823b951f97b5ccf2126e34d60cc9a365\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/raajnpatel",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "74ultra",
                "id": 43554945,
                "node_id": "MDQ6VXNlcjQzNTU0OTQ1",
                "avatar_url": "https://avatars2.githubusercontent.com/u/43554945?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/74ultra",
                "html_url": "https://github.com/74ultra",
                "followers_url": "https://api.github.com/users/74ultra/followers",
                "following_url": "https://api.github.com/users/74ultra/following{/other_user}",
                "gists_url": "https://api.github.com/users/74ultra/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/74ultra/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/74ultra/subscriptions",
                "organizations_url": "https://api.github.com/users/74ultra/orgs",
                "repos_url": "https://api.github.com/users/74ultra/repos",
                "events_url": "https://api.github.com/users/74ultra/events{/privacy}",
                "received_events_url": "https://api.github.com/users/74ultra/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Ryan Barnhill",
                "company": null,
                "blog": "",
                "location": "Bay Area, California USA",
                "email": null,
                "hireable": null,
                "bio": "This is my bio. There are many like it, but this one is mine.",
                "public_repos": 29,
                "public_gists": 0,
                "followers": 7,
                "following": 5,
                "created_at": "2018-09-24T21:07:25Z",
                "updated_at": "2019-08-08T21:25:21Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 21:25:21 GMT",
                "etag": "W/\"487e0e2fa2207386035461d3732092ee\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/74ultra",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "lucasbaze",
                "id": 16271037,
                "node_id": "MDQ6VXNlcjE2MjcxMDM3",
                "avatar_url": "https://avatars0.githubusercontent.com/u/16271037?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/lucasbaze",
                "html_url": "https://github.com/lucasbaze",
                "followers_url": "https://api.github.com/users/lucasbaze/followers",
                "following_url": "https://api.github.com/users/lucasbaze/following{/other_user}",
                "gists_url": "https://api.github.com/users/lucasbaze/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/lucasbaze/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/lucasbaze/subscriptions",
                "organizations_url": "https://api.github.com/users/lucasbaze/orgs",
                "repos_url": "https://api.github.com/users/lucasbaze/repos",
                "events_url": "https://api.github.com/users/lucasbaze/events{/privacy}",
                "received_events_url": "https://api.github.com/users/lucasbaze/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Lucas Bazemore",
                "company": "https://ryzeapp.co",
                "blog": "https://bazemore.me",
                "location": "College Station, TX",
                "email": "lucasabazemore@gmail.com",
                "hireable": true,
                "bio": "Lambda School Web Dev Student. Learning to build. Former PM at OutboundEngine. Former Co-founder of Ryze | The Personal Relationship Manager.",
                "public_repos": 33,
                "public_gists": 0,
                "followers": 31,
                "following": 29,
                "created_at": "2015-12-12T20:52:12Z",
                "updated_at": "2019-08-05T15:16:53Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Mon, 05 Aug 2019 15:16:53 GMT",
                "etag": "W/\"a5e5d3dacb26085db0eac8ff402c1c57\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/lucasbaze",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "pusheadmetal",
                "id": 17813760,
                "node_id": "MDQ6VXNlcjE3ODEzNzYw",
                "avatar_url": "https://avatars3.githubusercontent.com/u/17813760?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/pusheadmetal",
                "html_url": "https://github.com/pusheadmetal",
                "followers_url": "https://api.github.com/users/pusheadmetal/followers",
                "following_url": "https://api.github.com/users/pusheadmetal/following{/other_user}",
                "gists_url": "https://api.github.com/users/pusheadmetal/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/pusheadmetal/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/pusheadmetal/subscriptions",
                "organizations_url": "https://api.github.com/users/pusheadmetal/orgs",
                "repos_url": "https://api.github.com/users/pusheadmetal/repos",
                "events_url": "https://api.github.com/users/pusheadmetal/events{/privacy}",
                "received_events_url": "https://api.github.com/users/pusheadmetal/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Michael Perry",
                "company": null,
                "blog": "",
                "location": null,
                "email": "pusheadmetal@gmail.com",
                "hireable": null,
                "bio": "Lambda School Student!",
                "public_repos": 21,
                "public_gists": 0,
                "followers": 26,
                "following": 25,
                "created_at": "2016-03-13T16:42:25Z",
                "updated_at": "2019-07-30T15:44:55Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 30 Jul 2019 15:44:55 GMT",
                "etag": "W/\"d8b8db335f75787ca53f0c708f88e66a\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/pusheadmetal",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Surfsol",
                "id": 53657930,
                "node_id": "MDQ6VXNlcjUzNjU3OTMw",
                "avatar_url": "https://avatars1.githubusercontent.com/u/53657930?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Surfsol",
                "html_url": "https://github.com/Surfsol",
                "followers_url": "https://api.github.com/users/Surfsol/followers",
                "following_url": "https://api.github.com/users/Surfsol/following{/other_user}",
                "gists_url": "https://api.github.com/users/Surfsol/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Surfsol/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Surfsol/subscriptions",
                "organizations_url": "https://api.github.com/users/Surfsol/orgs",
                "repos_url": "https://api.github.com/users/Surfsol/repos",
                "events_url": "https://api.github.com/users/Surfsol/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Surfsol/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 76,
                "public_gists": 0,
                "followers": 0,
                "following": 0,
                "created_at": "2019-08-03T15:54:39Z",
                "updated_at": "2019-08-06T19:10:54Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Tue, 06 Aug 2019 19:10:54 GMT",
                "etag": "W/\"dd292e7be03ecee1b040fe1765d9524f\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Surfsol",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Devin-Bielejec",
                "id": 52635896,
                "node_id": "MDQ6VXNlcjUyNjM1ODk2",
                "avatar_url": "https://avatars0.githubusercontent.com/u/52635896?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Devin-Bielejec",
                "html_url": "https://github.com/Devin-Bielejec",
                "followers_url": "https://api.github.com/users/Devin-Bielejec/followers",
                "following_url": "https://api.github.com/users/Devin-Bielejec/following{/other_user}",
                "gists_url": "https://api.github.com/users/Devin-Bielejec/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Devin-Bielejec/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Devin-Bielejec/subscriptions",
                "organizations_url": "https://api.github.com/users/Devin-Bielejec/orgs",
                "repos_url": "https://api.github.com/users/Devin-Bielejec/repos",
                "events_url": "https://api.github.com/users/Devin-Bielejec/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Devin-Bielejec/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Devin Bielejec",
                "company": null,
                "blog": "www.devinbielejec.com",
                "location": "NY",
                "email": "devin.bielejec@gmail.com",
                "hireable": null,
                "bio": "I have been studying computer programming for about 3-4 years (self-taught) and am currently enrolled in Lambda school. \r\n\r\n",
                "public_repos": 26,
                "public_gists": 0,
                "followers": 4,
                "following": 1,
                "created_at": "2019-07-07T19:46:08Z",
                "updated_at": "2019-08-08T20:52:00Z",
                "private_gists": 0,
                "total_private_repos": 0,
                "owned_private_repos": 0,
                "disk_usage": 7697,
                "collaborators": 0,
                "two_factor_authentication": false,
                "plan": {
                  "name": "pro",
                  "space": 976562499,
                  "collaborators": 0,
                  "private_repos": 9999
                }
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Thu, 08 Aug 2019 20:52:00 GMT",
                "etag": "W/\"acf58fa897b12939ccbca042c3b61c46\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Devin-Bielejec",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            },
            {
              "data": {
                "login": "Derrick-Mei",
                "id": 36530574,
                "node_id": "MDQ6VXNlcjM2NTMwNTc0",
                "avatar_url": "https://avatars1.githubusercontent.com/u/36530574?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Derrick-Mei",
                "html_url": "https://github.com/Derrick-Mei",
                "followers_url": "https://api.github.com/users/Derrick-Mei/followers",
                "following_url": "https://api.github.com/users/Derrick-Mei/following{/other_user}",
                "gists_url": "https://api.github.com/users/Derrick-Mei/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Derrick-Mei/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Derrick-Mei/subscriptions",
                "organizations_url": "https://api.github.com/users/Derrick-Mei/orgs",
                "repos_url": "https://api.github.com/users/Derrick-Mei/repos",
                "events_url": "https://api.github.com/users/Derrick-Mei/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Derrick-Mei/received_events",
                "type": "User",
                "site_admin": false,
                "name": null,
                "company": null,
                "blog": "",
                "location": null,
                "email": null,
                "hireable": null,
                "bio": null,
                "public_repos": 139,
                "public_gists": 3,
                "followers": 18,
                "following": 19,
                "created_at": "2018-02-16T07:33:32Z",
                "updated_at": "2019-08-09T03:44:38Z"
              },
              "status": 200,
              "statusText": "OK",
              "headers": {
                "x-ratelimit-limit": "5000",
                "x-github-media-type": "github.v3",
                "x-ratelimit-remaining": "4868",
                "last-modified": "Fri, 09 Aug 2019 03:44:38 GMT",
                "etag": "W/\"f1a1d16b6aa96016907b8663fb45d5db\"",
                "content-type": "application/json; charset=utf-8",
                "cache-control": "private, max-age=60, s-maxage=60",
                "x-ratelimit-reset": "1565363243"
              },
              "config": {
                "url": "https://api.github.com/users/Derrick-Mei",
                "method": "get",
                "headers": {
                  "Accept": "application/json, text/plain, */*",
                  "Authorization": "Basic RGV2aW4tQmllbGVqZWM6ZnIxZmFnOSVTUGJsZk55REhkJTU="
                },
                "auth": {
                  "username": "Devin-Bielejec",
                  "password": "fr1fag9%SPblfNyDHd%5"
                },
                "transformRequest": [
                  null
                ],
                "transformResponse": [
                  null
                ],
                "timeout": 0,
                "xsrfCookieName": "XSRF-TOKEN",
                "xsrfHeaderName": "X-XSRF-TOKEN",
                "maxContentLength": -1
              },
              "request": {}
            }
          ]
        
        //data coming back is ojbects in an array
        userNamesData.forEach( user => {
            let location = user.data.location;
            console.log(location);
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
            frequencyByState[stateNameAbbr].push(`Name: ${user.data.name}: Github Handle: ${user.data.login}`);
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
                //if there is already a list, get it, or else this value will be null
                let currentOl = document.getElementById("listForUsers");
                console.log(currentOl);
                if (currentOl != null) {
                    const myNode = document.getElementById("listForUsers");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);
                    }
                } else {
                    currentOl = document.createElement("ol");
                    currentOl.id = "listForUsers";
                }

                const usersByThisState = frequencyByState[event.target.id];
                const sectionForInfo = document.querySelector("#usersByState");

                sectionForInfo.appendChild(currentOl);

                usersByThisState.forEach( item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    currentOl.appendChild(li);
                })
            });
        });

        } catch (error) {
        console.log(error);
    }
}

getUserNames();



    
