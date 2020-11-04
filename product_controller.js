module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        db.create_product()
        .then(() => res.status(200))
        .catch(err => {console.log(err)
        res.status(500).send("Oh snap! Something's not right...")
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db');
        db.read_product()
        .then(product => res.status(200).send(product))
        .catch(err => {console.log(err)
        res.status(500).send("Oh snap! Something's not right...")
        })
    },
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {console.log(err)
        res.status(500).send("Oh snap! Something's not right...")
        })
    },
    update: (req, res) => {
        const db = req.app.get('db');
        db.update_product()
        .then(() => res.status(200))
        .catch(err => {console.log(err)
        res.status(500).send("Oh snap! Something's not right...")
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        db.delete_product()
        .then(() => res.status(200))
        .catch(err => {console.log(err)
        res.status(500).send("Oh snap! Something's not right...")
        })
    }
}