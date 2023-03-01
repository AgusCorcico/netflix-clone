const { Router } = require('express')
const router = Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');


router.post('/', verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body);
        try {
            const saveMovie = await newMovie.save();
            res.status(200).json(saveMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed')
    }
});

router.put('/:id', verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                },
                {new:true}
            );
            res.status(200).json(updateMovie);
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed')
    }
});

router.delete('/:id', verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json('Movie deleted successfully');
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed')
    }
});


router.get('/find/:id', verify, async (req,res)=>{
        try {
            const movie = await Movie.findById(req.params.id);
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err);
        }
    }
);

router.get('/random', async (req,res)=>{
    const type = req.query.type;
    let movie;
    try {
        if(type === "series"){
            movie = await Movie. aggregate([
                { $match: { isSeries: true} }, 
                { $sample: { size: 1 } }, //para que me traiga una serie random para usarla como serie destacada
            ])
        }else{
            movie = await Movie. aggregate([
                { $match: { isSeries: false} }, 
                { $sample: { size: 1 } }, //para que me traiga una movie random para usarla como serie destacada
            ])
        }
        res.status(200).json(movie)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', verify, async (req,res)=>{
    if(req.user.isAdmin){
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse()); //para que me traigas las ultimas cargadas
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed')
    }
});



module.exports = router;