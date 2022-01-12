const controllers = require('../controllers/controllers.js')
const router = require('express').Router();

router.route("/hello").get(controllers.hello);

router.route("/sources").get(controllers.sendSource);

router.route("/add_source").post(controllers.addSource);

router.route("/delete_source/:id").post(controllers.deleteSource);

module.exports = router; 

