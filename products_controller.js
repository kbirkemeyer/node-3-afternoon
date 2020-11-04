module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        
        dbInstance.create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.status(500).send("Oops, that did not work")
        })
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        
        dbInstance.read_product(id)
            .then(product => {
                console.log(product)
                res.status(200).send(product)
            })
                .catch(err => {
            console.log(err)
            res.status(500).send("Oops, that did not work")
        })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            console.log(err)
            res.status(500).send("Oops, that did not work")
        })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_product([params.id, query.desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.status(500).send("Oops, that did not work")
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.status(500).send("Oh snap! Something's not right...")
        })
    }
}