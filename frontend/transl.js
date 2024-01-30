import axios from 'axios';

const encodedParams = new URLSearchParams();
encodedParams.set('from', 'auto');
encodedParams.set('to', 'en');
encodedParams.set('text', 'שלום');

const options = {
  method: 'POST',
  url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '8515a231dfmsh8dfc5d885202965p13ca56jsn728a290f9d4f',
    'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}