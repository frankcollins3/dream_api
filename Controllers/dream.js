const router = require*'express'.Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Dream.find().then((foundDreams) => {
        res.status(200).json({ dream: foundDreams })
    })
    .catch(err => { res.send(err) })
})
router.get('/:id', (req, res) => {
    models.Dream(200).json({ dream })
    })
    .catch(err => { res.send(err) })
    
    router.post('/', (req, res) => {
        models.dream.create(req.body).then((dream) => {
            res.status(201).json({ player })
        })

    }

    router.put('/:id', (req, res) => {
        models.Dream.updateOne(
            {_id: res.params.id },
        
        )
    })

    router.delete('/:id', (req, res) => {
        models.Dream.deleteOne({_id: req.params.id }).thend((deleted) => {
            console.log(req.params.id);
        })
    })

    module.exports = router;
    