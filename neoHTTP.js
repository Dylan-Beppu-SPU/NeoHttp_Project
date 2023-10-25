export class HttpRequest{

    /**
     * Constructor
     */
    constructor(){
    }


    /**
     * Uses the GET method to retrieve a resource
     * @param {target} url 
     * @returns Promise
     */
    Get(url) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "GET"
            }
            const response = await fetch(url, opt);
            const result = await response.json();
            // console.log(result);
            if(response.ok){
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }


    /**
     * Uses the POST method to create a resource
     * @param {target} url 
     * @param {upload} data 
     * @returns Promise
     */
    Post(url, data) {
        return new Promise(async (resolve, reject) => {
            // console.log(data);
            let opt = { // Can modify if need be
                method: "POST",
                body: JSON.stringify(data)
            }
            const response = await fetch(url, opt);
            const result = await response.json();
            if(response.ok){
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }


    /**
     * Uses the PUT method to update a resource
     * @param {target} url 
     * @param {upload} data 
     * @returns Promise
     */
    Put(url, data) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "PUT",
                body: JSON.stringify(data)

            }
            const response = await fetch(url, opt);
            const result = await response.json();
            if(response.ok){
                // console.log(result);
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }

    
    /**
     * Uses the DELETE method to delete a resource
     * @param {target} url 
     * @returns Promise
     */
    Delete(url) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "DELETE"
            }
            const response = await fetch(url, opt);
            const result = await response.json();
            if(response.ok){
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }


    /**
     * Uses the PATCH method to update a resource
     * @param {target} url 
     * @param {upload} data 
     * @returns Promise
     */
    Patch(url, data) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "PATCH",
                body: JSON.stringify(data)
            }
            const response = await fetch(url, opt);
            const result = await response.json();
            if(response.ok){
                // console.log(result);
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }

}