export class HttpRequest{
    //Constructor
    constructor(){
        // this.Hi = "";
    }


    //Get Request
    Get(url) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "GET"
            }
            const response = await fetch(url, opt);
            const result = await response.json();
            console.log(result);
            if(response.ok){
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }



    //Post Request
    Post(url, data) {
        return new Promise(async (resolve, reject) => {
            console.log(data);
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


    Put(url, data) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "PUT",
                body: JSON.stringify(data)

            }
            const response = await fetch(url, opt);
            const result = await response.json();
            if(response.ok){
                console.log(result);
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }


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



    Patch(url, data) {
        return new Promise(async (resolve, reject) => {
            let opt = { // Can modify if need be
                method: "PATCH",
                body: JSON.stringify(data)
            }
            const response = await fetch(url, opt);
            const result = await response.json();
            if(response.ok){
                console.log(result);
                resolve(JSON.stringify(result));
            } else {    
                reject(`Get Error:  ${response.status}: ${response}`);
            }
        })
    }

}