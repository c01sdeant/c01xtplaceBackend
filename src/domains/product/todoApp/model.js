const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//     blogId: {type: String},
//     commentEmail: {type: String},
//     commentName: {type: String},
//     commentContent: {type: String}
// }, {timestamps: true});

// const subscribeNewsSchema = new mongoose.Schema({
//     subscribeNewsEmail: {type: String}
// }, {timestamps: true});

// const blogSchema = new mongoose.Schema({
//     blogTitle: {type: String},
//     blogSummary:{type: String},
//     blogContent: {type: String},
//     blogImage: {type: String},
//     blogDate: {type: String}
// }, {timestamps: true});



// const commentSchemaExport = mongoose.model('comment', commentSchema, 'comments');

// const SubscribeNewsSchemaExport = mongoose.model('subscribeNews', subscribeNewsSchema, 'subscribedNews');

// const blogSchemaExport = mongoose.model('blog', blogSchema, 'blogs');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const todoSchema = new mongoose.Schema({
    todoTitle: {type: String},
    todoSummary:{type: String},
    todoContent: {type: String},

    todoList: { type: [String] }

}, {timestamps: true});
const todoSchemaExport = mongoose.model('todo', todoSchema, 'todos');

const todoMatchUser = new mongoose.Schema({
    todoID: {type: String},
    userID: {type: String}
});
const todoMatchUserSchemaExport = mongoose.model('todoMatchUser', todoMatchUser, 'todosMatchUser');


module.exports = {
    // blogSchemaExport,
    // commentSchemaExport,
    // SubscribeNewsSchemaExport,


    todoSchemaExport,
    todoMatchUserSchemaExport
}