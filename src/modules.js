export const distributedBySeasons = async function distributedBySeasons(
  APIurl
) {
  const response = await fetch(APIurl);
  const responseToJson = await response.json();

  const allSeasons = Array.from(
    new Set(responseToJson.map((element) => parseInt(element.season, 10)))
  ).map((el) => el.toString());

  let result = {};

  allSeasons.forEach((elem) => {
    let season = responseToJson.filter((element) => element.season === elem);
    result[`season ${elem}`] = season;
  });
  return result;
};

export const getCharacters = async function getCharacters(arr) {
  async function searchByName(name) {
    name = name.replace(/ /g, "+");
    let response = await fetch(
      `https://www.breakingbadapi.com/api/characters?name=${name}`
    );
    let responseJSON = await response.json();
    if (responseJSON !== []) {
      return responseJSON[0];
    }
    return undefined;
  }

  async function searchByNickname(nickname) {
    const url = "https://breakingbadapi.com/api/characters";
    const response = await fetch(url);
    const responseJSON = await response.json();
    const nicknames = responseJSON.map((el) => el.nickname);
    if (nicknames.includes(nickname)) {
      let index = nicknames.indexOf(nickname);

      return await responseJSON[index];
    }
    // искать по частям
    let nicknameParts = nickname.split(" ");
    for (var i = 0; i < nicknameParts.length; i++) {
      let ind = nicknames.indexOf(nicknameParts[i]);

      if (ind !== -1) {
        return await responseJSON[ind];
      }
    }
    return undefined;
  }

  let lstWithObjects = [];
  for (var i = 0; i < arr.length; i++) {
    let temp = {};
    let name = arr[i];
    //Elliott Schwarts should be Elliot Shwarts (extra t)
    if (name === "Elliott Schwarts") {
      name = "Elliot Schwarts";
    }
    await searchByName(name).then((data) => {
      temp = data;
    });
    if (temp === undefined) {
      await searchByNickname(name).then((data) => {
        temp = data;
      });
    }

    lstWithObjects.push(temp);
  }
  let result = lstWithObjects.filter((el) => {
    if (el !== undefined) {
      return el;
    }
  });

  return lstWithObjects.filter((el) => {
    if (el !== undefined) {
      return el;
    }
  });
};

export async function getDeathsInEpisode(season, episode) {
  const url = "https://breakingbadapi.com/api/deaths";
  const response = await fetch(url);
  const responseJSON = await response.json();

  let arr = responseJSON.filter((el) => {
    if (el.season.toString() === season && el.episode.toString() === episode) {
      console.log(season);
      return el;
    }
  });
  return arr;
}
