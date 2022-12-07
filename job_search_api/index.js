import url from 'url';
import axios from 'axios';
import chalk from 'chalk';
import config from './config.js';
import http from "http";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
};

const decodeAPIParams = searchParams => Array
    .from(searchParams.keys())
    .reduce((acc, key) => ({...acc, [key]: searchParams.get(key)}), {});

const apiServer = http.createServer((req, res) => {
    const requestURL = url.parse(req.url);
    // { search : <search_term>, location: <location> }
    const decodedParams = decodeAPIParams(new URLSearchParams(requestURL.search));
    const {search, location, country = 'us', sort_by = 'date'} = decodedParams;
    let api_string = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.API_KEY}&sort_by=${sort_by}`;
    if (search != null) {
        api_string += `&what=${search}`;
    }
    if (location != null) {
        api_string += `&where=${location}`;
    }
    const targetURL = api_string;
    if (req.method === 'GET') {
        // console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
        axios.get(targetURL)
            .then(response => {
                res.writeHead(200, headers);
                res.end(JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(chalk.red(error));
                res.writeHead(500, headers);
                res.end(JSON.stringify(error.data));
            })
    }
});

export default apiServer;