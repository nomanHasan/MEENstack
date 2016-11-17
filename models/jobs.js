var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
    area: {type: String, required:"The Area should be mentioned. " },
    institution: {type: Schema.Types.ObjectId, ref:'Institution', required: "The Institution must be mentioned. "},
    
    
});

var infoSchema = new Schema({
    medium: { type: String, required: "Medium Type is required "},
    level: {type: String, required: "Level is Required "},
    year: {type: Number }
});

infoSchema.pre('validate', function(next){
    
});