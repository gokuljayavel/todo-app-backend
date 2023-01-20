import * as todoservice from './../services/todo-services.js';

// this function is used to set response fetch from db 
const setResponse = (obj,response) => {
    response.status(200);
    response.json(obj);
}

// this function is used to set the error in response 
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

// this controller function is used to save data in db
export const post = async (req, res) => {
    try{
        const task = req.body;
        const todoTask = await todoservice.save(task);
        setResponse(todoTask, res)
    }catch(error){
        setError(error,res)
    }   
    
}

// this controller is used to fetch data from db.
export const get = async (req, res) => {
    try{
        const task = req.query;
        const todoTask = await todoservice.search(task);
        setResponse(todoTask, res)
    }catch(error){
        setError(error,res)
    }
}

export const put = async (req, res) => {
    try{
        console.log(req.query);
       const todoTask = await todoservice.update(req);
       setResponse(todoTask, res)
   }catch(error){
       setError(error,res)
   }
    
}

export const remove = async (req, res) => {
    
    try{
        console.log(req.query);
       const todoTask = await todoservice.remove(req);
       setResponse(todoTask, res)
   }catch(error){
       setError(error,res)
   }
}