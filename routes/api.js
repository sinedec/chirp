var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
	if(req.method === "GET"){
		//continue to the nextmiddleware or handler
		return next();
	}
	if(!req.isAuthenticated()){
		//user not uthenticated, redirect to login page
		return res.redirect('/#login');
	}

	//User authenticated continue to next middleware or handler
	return next();
});
/* GET home page. */
router.route('/posts')
	// Return all posts
	.get(function(req, res){
		//temporary solution without mongo

		res.send({message: 'TODO return all posts'});
	})

	.post(function(req,res){
		//temporary solution
		res.send({message: 'TODO create a new post'});
	});

router.route('/posts/:id')
	//return a particular post
	.get(function(req, res){
		//temporary solution
		res.send({message: 'TODO return a post with ID ' + req.params.id});
	})

	//Update an existing post
	.put(function(req,res){
		res.send({message: 'TODO modify a post with ID ' + req.params.id});
	})

	//Delete an existing post
	.delete(function(req,res){
		res.send({message: 'TODO delete a post with ID ' + req.params.id});
	});

module.exports = router;
