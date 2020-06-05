import { getRequest } from "../ClientRequest"


export const getGists = () => 
    getRequest({url: "https://api.github.com/gists"});