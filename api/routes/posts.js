const router = require("express").Router();
const User = require('../models/User');
const Post = require("../models/Post");

// CREATE POST

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true })

                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(401).json("You can update only your post! ");
            }
        }
        else {
            res.status(401).json("You can update only your post! ");
        }
    } catch (error) {

    }
})


// DELETE POST

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // console.log(post)
        if (post.username === req.body.username) {
            // console.log(post.username)
            try {
                await post.deleteOne()
                res.status(200).json("Post has been deleted !");
            } catch (error) {
                res.status(404).json(error);
            }
        }
        else {
            res.status(401).json("You can delete only your post !");
        }
    } catch (error) {
        res.status(404).json("You can delete only your post !");
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error)
    }
})


// GET ALL POST
router.get("/",async(req,res)=>{
    const username=req.query.user;
    const catName=req.query.cat;


    try {
        let posts;
        if(username)
        {
            posts=await Post.find({username});
        }else{
            if(catName){
                posts=await Post.find({categories:{
                    $in:[catName]
                }})
            }
            else{
                posts=await Post.find();
            }
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;