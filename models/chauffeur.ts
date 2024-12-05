import mongoose, {models, Schema} from "mongoose";

const chauffeurSchema = new Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    }
} , {timestamps : true})

const Chauffeur = models.Chauffeur || mongoose.model("Chauffeur" , chauffeurSchema);
export default Chauffeur
