const router = require('express').Router();
const verifyToken = require('../../../middleware/authMiddleware');
const {home, getAllTodos, addTodo, addTodoUI} = require('./controller');

router.get('/',verifyToken, home);



// router.get('/addminnpannelllll1', adminPannel).post('/addminnpannelllll1', adminPannelPost);

// router.post('/uploadimage', uploadImage);

// router.get('/adminl0gin', loginForPannel).post('/adminl0gin', loginForPannelPost);

// router.get('/:blogId', blogContentPage).post('/:blogId', blogContentPagePost);

// router.get('/:blogId/comments', comments);

// router.get('/comments/allcomments', allComments);


router.get('/todos', getAllTodos);

router.get('/addTodo', addTodoUI).post('/addtodo', addTodo);

module.exports = router;