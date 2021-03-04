import axios from "axios";

const BASEURL = "https://randomuser.me/api/?";
const SEARCHPARAMS = "results=50";

export default {
    search: function() {
        return axios.get(BASEURL + SEARCHPARAMS );
    }
};