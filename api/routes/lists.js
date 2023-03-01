const { Router } = require('express')
const router = Router();
const List = require('../models/List');
const verify = require('../verifyToken');


router.post('/', verify, async (req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);
        try {
            const saveList = await newList.save();
            res.status(200).json(saveList);
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
            await newList.findByIdAndDelete(req.params.id);
            res.status(200).json('List deleted successfully');
        } catch (err) {
            res.status(500).json(err);
        }
    }else{
        res.status(403).json('You are not allowed')
    }
});

router.get('/', verify, async (req,res)=>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];

    try {
        //si elegimos tipo y genero, nos va a traer una lista de 10 del tipo y genero elegido de forma random
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample: { size: 10 }},
                    {$match: { type: typeQuery, genre: genreQuery}}
                ]);
            }else{
                //si tenemos tipo pero no genero 
                list = await List.aggregate([
                    {$sample: { size: 10 }},
                    {$match: { type: typeQuery}}
                ]);
            }
        }else {
            list = await List.aggregate([{$sample: { size: 10 }}]);
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }

});



module.exports = router;