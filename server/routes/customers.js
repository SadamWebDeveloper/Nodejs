const express =  require("express");
const router = express.Router();
const customersController = require('../controllers/customersController');

// view all data
router.get('/',customersController.view);


 
router.get('/addUser',customersController.addUser);
router.post('/addUser',customersController.save);
//  router.post('/addUser',()=> { console.log("hiiiiiiiii");});

// router.get('',(req,res)=>{
//     res.render("home");
// });


module.exports=router;
