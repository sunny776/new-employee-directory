import axios from "axios";

// Export an object containing methods we'll use for accessing the users API

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};