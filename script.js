
function getStorage() {
    return localStorage.getItem('selectedSport')
}
async function setStorage(sport) {
    localStorage.setItem('selectedSport', sport)
}

function setThing() {
    const key = 'myKey';
    const value = { name: 'my value' };
    chrome.storage.local.set({key : value}, () => {
        console.log('Stored name: ' + value.name);
      });
}

async function fetchData() {
    //const res=await fetch ("https://api.the-odds-api.com/v4/sports/basketball_nba/scores/?daysFrom=1&apiKey=93085a2bd9f92750ef28cf8e05bd48b7");
    // request(`https://api.the-odds-api.com/v4/sports/${query}/odds/?apiKey=${process.env.ODDS_API_KEY}&regions=us&markets=h2h,spreads&oddsFormat=american&date=${today}`,
    // function (error, response, body) {
        
    //     let data = parseData(body)

    //     res.json({
    //         success: true,
    //         body: data,
    //         response: response
    //     })
    // }) 


    let record= parseResult([
        {
            "id": "7f066badf0d4be4edf24f5c7c05331d9",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T01:38:00Z",
            "completed": true,
            "home_team": "Los Angeles Angels",
            "away_team": "Washington Nationals",
            "scores": [
                {
                    "name": "Los Angeles Angels",
                    "score": "2"
                },
                {
                    "name": "Washington Nationals",
                    "score": "0"
                }
            ],
            "last_update": "2023-04-12T09:32:52Z"
        },
        {
            "id": "55aca8d0dc26fa6c8b75c10afad88d71",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T01:40:00Z",
            "completed": true,
            "home_team": "Arizona Diamondbacks",
            "away_team": "Milwaukee Brewers",
            "scores": [
                {
                    "name": "Arizona Diamondbacks",
                    "score": "1"
                },
                {
                    "name": "Milwaukee Brewers",
                    "score": "7"
                }
            ],
            "last_update": "2023-04-12T09:32:52Z"
        },
        {
            "id": "27315a7eda2ced37dd77a1992a21c56d",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T01:45:00Z",
            "completed": true,
            "home_team": "San Francisco Giants",
            "away_team": "Los Angeles Dodgers",
            "scores": [
                {
                    "name": "San Francisco Giants",
                    "score": "5"
                },
                {
                    "name": "Los Angeles Dodgers",
                    "score": "0"
                }
            ],
            "last_update": "2023-04-12T09:32:52Z"
        },
        {
            "id": "73d1c521df85154205d3fb84ade0d73f",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T16:35:00Z",
            "completed": true,
            "home_team": "Pittsburgh Pirates",
            "away_team": "Houston Astros",
            "scores": [
                {
                    "name": "Pittsburgh Pirates",
                    "score": "0"
                },
                {
                    "name": "Houston Astros",
                    "score": "7"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "cb18af2189532bf5fa3b922d535428bc",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T17:10:00Z",
            "completed": true,
            "home_team": "Minnesota Twins",
            "away_team": "Chicago White Sox",
            "scores": [
                {
                    "name": "Minnesota Twins",
                    "score": "3"
                },
                {
                    "name": "Chicago White Sox",
                    "score": "1"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "1aedc6e60d70f4b61d79ad21b5459b43",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T17:10:00Z",
            "completed": true,
            "home_team": "Cleveland Guardians",
            "away_team": "New York Yankees",
            "scores": [
                {
                    "name": "Cleveland Guardians",
                    "score": "3"
                },
                {
                    "name": "New York Yankees",
                    "score": "4"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "9b426156d4ce72fdb3bead05516793d6",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T17:10:00Z",
            "completed": true,
            "home_team": "New York Mets",
            "away_team": "San Diego Padres",
            "scores": [
                {
                    "name": "New York Mets",
                    "score": "5"
                },
                {
                    "name": "San Diego Padres",
                    "score": "2"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "d6981f51f86d228475d48ecc8d77f339",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T18:19:59Z",
            "completed": true,
            "home_team": "Chicago Cubs",
            "away_team": "Seattle Mariners",
            "scores": [
                {
                    "name": "Chicago Cubs",
                    "score": "2"
                },
                {
                    "name": "Seattle Mariners",
                    "score": "5"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "18f1c2f50977794a3d3b5ab865428378",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T19:10:00Z",
            "completed": true,
            "home_team": "Colorado Rockies",
            "away_team": "St. Louis Cardinals",
            "scores": [
                {
                    "name": "Colorado Rockies",
                    "score": "4"
                },
                {
                    "name": "St. Louis Cardinals",
                    "score": "7"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "b2e88832dc4ad87d54f000ad7483de3a",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T19:40:00Z",
            "completed": true,
            "home_team": "Arizona Diamondbacks",
            "away_team": "Milwaukee Brewers",
            "scores": [
                {
                    "name": "Arizona Diamondbacks",
                    "score": "7"
                },
                {
                    "name": "Milwaukee Brewers",
                    "score": "3"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "375dc1a5334c5371a2bed134d43e2d0f",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T20:05:00Z",
            "completed": true,
            "home_team": "Philadelphia Phillies",
            "away_team": "Miami Marlins",
            "scores": [
                {
                    "name": "Philadelphia Phillies",
                    "score": "2"
                },
                {
                    "name": "Miami Marlins",
                    "score": "3"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "4e52a2934c276dee9b141fe0ce5a1793",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T20:07:00Z",
            "completed": true,
            "home_team": "Los Angeles Angels",
            "away_team": "Washington Nationals",
            "scores": [
                {
                    "name": "Los Angeles Angels",
                    "score": "3"
                },
                {
                    "name": "Washington Nationals",
                    "score": "2"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "76f1262561d3847e8af6424d24b57fe3",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T22:35:00Z",
            "completed": false,
            "home_team": "Baltimore Orioles",
            "away_team": "Oakland Athletics",
            "scores": [
                {
                    "name": "Baltimore Orioles",
                    "score": "4"
                },
                {
                    "name": "Oakland Athletics",
                    "score": "7"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "cf075d4192c7056022edb9abd8414457",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T22:39:58Z",
            "completed": false,
            "home_team": "Tampa Bay Rays",
            "away_team": "Boston Red Sox",
            "scores": [
                {
                    "name": "Tampa Bay Rays",
                    "score": "8"
                },
                {
                    "name": "Boston Red Sox",
                    "score": "7"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "e275300e26af87937a1907b81966fdcf",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T23:07:00Z",
            "completed": false,
            "home_team": "Toronto Blue Jays",
            "away_team": "Detroit Tigers",
            "scores": [
                {
                    "name": "Toronto Blue Jays",
                    "score": "1"
                },
                {
                    "name": "Detroit Tigers",
                    "score": "3"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "0c0d4529fcea1301e1425cd364476dcc",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-12T23:20:00Z",
            "completed": false,
            "home_team": "Atlanta Braves",
            "away_team": "Cincinnati Reds",
            "scores": [
                {
                    "name": "Atlanta Braves",
                    "score": "3"
                },
                {
                    "name": "Cincinnati Reds",
                    "score": "3"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "89b6cdecf1a34de97127f39b7b08d769",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T00:05:00Z",
            "completed": false,
            "home_team": "Texas Rangers",
            "away_team": "Kansas City Royals",
            "scores": [
                {
                    "name": "Texas Rangers",
                    "score": "1"
                },
                {
                    "name": "Kansas City Royals",
                    "score": "6"
                }
            ],
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "a095ff8a091911a6865773eb0a554336",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T01:45:00Z",
            "completed": false,
            "home_team": "San Francisco Giants",
            "away_team": "Los Angeles Dodgers",
            "scores": null,
            "last_update": "2023-04-13T01:09:31Z"
        },
        {
            "id": "cd31c456b80313a6ff4ba77ed57c258d",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T17:05:00Z",
            "completed": false,
            "home_team": "Baltimore Orioles",
            "away_team": "Oakland Athletics",
            "scores": null,
            "last_update": null
        },
        {
            "id": "5a4d24e063a76ea4c27f6e530d157753",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T17:10:00Z",
            "completed": false,
            "home_team": "Tampa Bay Rays",
            "away_team": "Boston Red Sox",
            "scores": null,
            "last_update": null
        },
        {
            "id": "571ab0e1940a646be7ca53d14273a5fb",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T22:40:00Z",
            "completed": false,
            "home_team": "Cincinnati Reds",
            "away_team": "Philadelphia Phillies",
            "scores": null,
            "last_update": null
        },
        {
            "id": "2bf87d2a588be5d6ebd818e2d8c71096",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T23:05:00Z",
            "completed": false,
            "home_team": "New York Yankees",
            "away_team": "Minnesota Twins",
            "scores": null,
            "last_update": null
        },
        {
            "id": "a64eed6ab7350711d592e6e6d1ae3b1c",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T23:07:00Z",
            "completed": false,
            "home_team": "Toronto Blue Jays",
            "away_team": "Detroit Tigers",
            "scores": null,
            "last_update": null
        },
        {
            "id": "549d3b981322871ccbe3db7c70486054",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-13T23:45:00Z",
            "completed": false,
            "home_team": "St. Louis Cardinals",
            "away_team": "Pittsburgh Pirates",
            "scores": null,
            "last_update": null
        },
        {
            "id": "698b733efeb10b5607f31723d81afce8",
            "sport_key": "baseball_mlb",
            "sport_title": "MLB",
            "commence_time": "2023-04-14T01:40:00Z",
            "completed": false,
            "home_team": "San Diego Padres",
            "away_team": "Milwaukee Brewers",
            "scores": null,
            "last_update": null
        }
    ])



    //console.log(getStorage())


    let finalHTML = ''





    //console.log(record)
    const scoresElement = document.getElementById('scores');
    scoresElement.innerHTML = '';
    // finalHTML += 
    // `<tr>
    //     <td class='td'>
    //         <div class='sport'>
    //             <button>MLB</button>
    //         </div>
    //     </td>
    //     <td class='td'>
    //         <div class='sport'>
    //             <button>NBA</button>
    //         </div>
    //     </td>
    //     <td class='td'>
    //         <div class='sport'>
    //             <button>NFL</button>
    //         </div>
    //     </td>
    //     <td class='td'>

    //         <div class='sport'>
    //             <button>NHL </button>
    //         </div>
    //     </td>


    // </tr>`
    for(let score of record) {

        finalHTML +=            
        `<tr >
            
            <td class="top">
                <div class="team">
                    <img width="70" height="70" src="https://res.cloudinary.com/mattreiley/image/upload/v1676438709/Pnyx/Teams/${score.homeTeam}"/>

                </div>
                <div class="team">
                    ${score.homeScore}
                </div>
            </td>
            <td>
                <div class="team">
                    <img width="70" height="70" src="https://res.cloudinary.com/mattreiley/image/upload/v1676438709/Pnyx/Teams/${score.awayTeam}"/>
                </div>
                <div class="team">
                    ${score.awayScore}
                </div>
            </td>

            <td class="team-name">${score.startTime}</td>
        </tr>`
    }



  
    scoresElement.innerHTML = finalHTML

}



function parseResult(record) {
    //console.log(data[0].scores)

    let games = [];
    for (let data of record) {
        //Will be revisted for time zones
        //console.log(data.scores)
        let scores = data.scores
        
        //console.log(data)
        let today = new Date();

        let date = new Date(data.commence_time);
        //making sure game has not started

        // if(today.getTime() < date.getTime()) {
            
            let game = {};
            let gameDate = new Date(new Date(
                data["commence_time"]).toLocaleString("en-US", {timeZone: "America/New_York"}))
            let gameHour = gameDate.getHours();
            let gameMinutes = gameDate.getMinutes();
            let gameMonth = gameDate.getMonth() + 1;
            let gameDay = gameDate.getDate();
            let amPm;
            game.id = data.id
            
            if (gameMinutes < 10) {
                gameMinutes = `0${gameMinutes}`
            }
            if(gameHour > 12) {
                gameHour -= 12
                amPm = 'pm'
            } else {
                amPm = 'am'
            }
            

            game.startTime = `${gameHour} : ${gameMinutes} ${amPm} est ${gameMonth}/${gameDay}`;
            game.startTimeUTC = data["commence_time"];
            game.homeTeam = data["home_team"]
            game.awayTeam = data["away_team"]







            if(scores !== null) {
                game.homeScore = parseInt(data.scores[0].score) 
                game.awayScore = parseInt(data.scores[1].score)
            } else {
                game.homeScore = 0
                game.awayScore = 0
            }
           


            games.push(game);
        //}

  
        


        
    }

    return games;
}

//setThing();

const toPromise = (callback) => {
    const promise = new Promise((resolve, reject) => {
        try {
            callback(resolve, reject);
        }
        catch (err) {
            reject(err);
        }
    });
    return promise;
}

// Usage example: 
const saveData = () => {
    const key = 'myKey';
    const value = { name: 'my value' };

    const promise = toPromise((resolve, reject) => {
        chrome.storage.local.set({ [key]: value }, () => {
            if (chrome.runtime.lastError)
                reject(chrome.runtime.lastError);

            resolve(value);
        });
    });
}

// Now we can await it:
chrome.storage.local.set({ "greeting": "hello" }).then(() => {
    console.log("Value is set to " + "hello");
  });

fetchData();