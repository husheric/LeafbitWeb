const db = require("./index")

function getUserTree(req, res, next) {
	db
		.any("SELECT * FROM trees WHERE user_id=${user_id}", { user_id: req.params.user_id })
		.then(data => {
			res.status(200).json({
				status: "success",
				data: data,
				message: "fetched all users"
			})
		})
		.catch(err => {
			next(err)
		})
}

function getTreeMarkers(req, res, next) {
	 db
	  .any("SELECT * FROM tree_markers")
	  .then(data => {
	    res.status(200).json({
	      status: "sucess",
	      data: data,
	      message: "fetched all markers"
	    })
	  })
	  .catch(err => {
	    next(err)
	  })
}

function insertTreeMarker(req, res, next) {
	const { planted_by, tree, lat, lng } = req.body;
	db
		.none("INSERT INTO tree_markers (planted_by, tree, lat, lng) VALUES (${planted_by}, ${tree}, ${lat}, ${lng})", {
			planted_by,
			tree,
			lat,
			lng	
		})
		.then(data => {
			res.status(200).json({
				status: "success",
				data: data,
				message: 'inserted tree marker'
			})
		})
}

module.exports = {
	getUserTree,
	getTreeMarkers,
	insertTreeMarker
}