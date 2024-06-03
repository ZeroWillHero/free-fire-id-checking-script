const express = require('express')
const router = express.Router();
const axios = require('axios');



router.post('/', async (req, res) => {
    const {login_id} = req.body;
    const apiUrl = 'https://shop.garena.ph/api/auth/player_id_login';

    const headers = {
        'Accept-Language': 'en-US,en;q=0.9,si;q=0.8',
        'Connection': 'keep-alive',
        'Cookie': 'MicrosoftApplicationsTelemetryDeviceId=dcad078d-3b53-4a56-978a-7d40d4fcef05; MicrosoftApplicationsTelemetryFirstLaunchTime=2024-05-03T16:23:37.128Z; source=pc; session_key=si57vw2jhtt9vd77ntqvdpfjtjf69dfa; datadome=S1I~cJBaAkc2vHXuuZOd0l5qX~FFrDDQeNZrFWYfBXxe0Jt1GuklGpPecGGPIndsQm1tAdKTA1ePoJA58O0dSLTwcjS5t0g_qstAmAsfoTifVghPhirlbRySpDaPXoyh',
        'Origin': 'https://shop.garena.ph',
        'Referer': 'https://shop.garena.ph/app',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
        'accept': 'application/json',
        'content-type': 'application/json',
        'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'x-datadome-clientid': 'DbZbmFcgT9~nU9MA7ten1te7zkibsKePUN2X3boE_bHjoJl_laGXpqHA9nrGQZz~U7ZH9QRa632c9SmfQRLfylyuRwjcF8Np3epFP12MGCCqct3NutQN6UpSrd3xPJui'
    };

    const data = {
        app_id: 100067,
        login_id: login_id,
        app_server_id: 0
    };

    const response = await axios.post(apiUrl, data, { headers });
    // console.log(response.data);
    res.send(response.data);

    // if(response.data.hasOwnProperty('error')){
    //     res.send(response.data).status(400);
    // }else {
    //     res.send(response.data).status(200);
    // }
    

})

module.exports = router;


