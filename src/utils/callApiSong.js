import axios from 'axios';
import * as Config from './../constants/config';


export default function callApiSong(endpoint,method='GET',body){
    console.log("TCL: callApiSong -> endpoint", endpoint)
    return axios({
        method:method,
        url:`${Config.API_SONG}${endpoint}`,
        data:body
    }).catch(err=>{
        console.log(err)
    })
}
