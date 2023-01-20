import mongoose from 'mongoose';
import momentTimezone from 'moment-timezone'

//mport  moment from 'moment-timezone';

//const date = modatment.tz(Date.now().toLocaleString, 'America/New_York');
// get the local date 
const date = Date.parse(new Date().toLocaleDateString());

// creating the schema in db
const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: 'The id is required'
    },
    title:{
        type:String,
        required: 'The lastname is required'
    },
    description:{
        type:String,
        required: 'The phone number is required',
    },
    dueDate:{
        type : Date,
        required: 'The due date is required',
    },
    dueTime:{
        type: String,
        required: 'The due time is required',
    },
    status:{
        type: String,
        default:"Open"
    },
    createdDate:{
        type:Date,
        default: date,
    },
    lastModifiedDate:{
        type:Date,
        default: date,
    }
},{versionKey:false})

// creating model based on given schema
const model = mongoose.model('todo',schema);
export default model;