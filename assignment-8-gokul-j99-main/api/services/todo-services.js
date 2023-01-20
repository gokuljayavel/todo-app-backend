import todo from './../models/todo.js';

// save the given tsask to db
export const save = async (task) => {
    const newTask = new todo(task);
    return newTask.save();
}

// fetch th all task from db if id is emty or else fetch selected id.
export const search = async (query) =>{
    console.log(query);
    let newTask;
    const filter = { id: query.id };
    console.log(filter);
    if(query.id == undefined){
         newTask = todo.find().exec();
    }
    else{
        newTask = todo.findOne(query).exec();
    }
    return newTask;
}

// update the given task based on the given id
export const update = async (req) => {
    const date = Date.parse(new Date().toLocaleDateString());
    const query = req.query.id
    const filter = { id: query};
    const update = req.body;
    update.lastModifiedDate = date;
    console.log(update);
    const newTask = todo.findOneAndUpdate(filter,update,{
        new: true
    }).exec();

    return newTask;
}

// remove the task from database based on given id
export const remove = async (req) => {
    const query = req.query.id
    const filter = { id: query };
    const newTask = todo.findOneAndDelete(filter).exec();

    return newTask
}