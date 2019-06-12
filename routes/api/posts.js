const router = require('express').Router()
const cloudinary = require('cloudinary')

//Load Quote model
const Post = require('../../models/Post')

// @route   GET api/quotes/test
// @desc    Tests quotes
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts route works' }))

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', (req, res) => {
    const postFields = {}

    console.log(req.body.coordinates)
    if (req.body.user) postFields.user = req.body.user
    if (typeof req.body.coordinates !== 'undefined') {
        postFields.coordinates = req.body.coordinates.split(',').map(point => {
            return Number(point)
        })
    }
    // console.log(postFields.user)
    // console.log(postFields.coordinates)
    // console.log(req.body.image)

    cloudinary.v2.uploader.upload(req.body.image, { width: 200, height: 200, crop: 'limit', tags: req.body.tags, moderation: 'manual' })
        .then(image => {
            postFields.image = image.url
            // console.log(postFields)
            console.log(postFields)
            // res.json(image.url)
        })
        .then(() => {
            const newPost = new Post(postFields)
            newPost.save()
                .then(post => console.log(post))
                .catch(err => console.log(err.message))
        })
        .catch(err => res.json(err))
})

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', (req, res) => {
    Post.find({})
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
})

module.exports = router;
