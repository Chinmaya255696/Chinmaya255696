const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const bolgSchema = new mongoose.Schema({

    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    authorId: {
        type:ObjectId,
        required:true,
        ref:"Project_Author"
    },
    tags: {
        type:[String]
    },
    category:{
        type:String,
        required:true,
        enum:["technology", "entertainment", "life-style", "food", "fashion"]
    },
    subcategory:{
        type:[String] //examples[technology-[web development, mobile development, AI, ML etc]
    },
    isDeleted:{
        type: Boolean,
        default: false
    },
    isPublished:{
        type: Boolean,
        default: false
    }
    }, { timestamps: true });

    module.exports = mongoose.model('Project_Blog',bolgSchema) 




// Blogs Model
// { title: {mandatory}, body: {mandatory}, authorId: {mandatory, refs to author model}, tags: {array of string}, category: {string, mandatory, examples: [technology, entertainment, life style, food, fashion]}, subcategory: {array of string, examples[technology-[web development, mobile development, AI, ML etc]] }, createdAt, updatedAt, deletedAt: {when the document is deleted}, isDeleted: {boolean, default: false}, publishedAt: {when the blog is published}, isPublished: {boolean, default: false}}