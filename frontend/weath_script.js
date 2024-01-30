import axios from 'axios';

const encodedParams = new URLSearchParams();
encodedParams.set('locationKey', 'Ramat Gan');

const options = {
  method: 'POST',
  url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '8515a231dfmsh8dfc5d885202965p13ca56jsn728a290f9d4f',
    'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
