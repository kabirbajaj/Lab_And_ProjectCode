const Store = require('../models/store');

exports.index = (req, res) => {
    Store.find() 
    .then(stores => {
        res.render('store/index', {
            stores: stores,
            name: 'focus'
        });
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};
exports.show = (req, res) => {
    Store.findById(req.params.id)
    .then(store => {
        res.render('store/show', {
      store: store,
      name: store.name
        });
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};

exports.new = (req, res) => {
    res.render('store/new', {
name: 'NEW ALBUM FOR THE STORE'
    });
};

exports.edit = (req, res) => {
    Store.findById(req.params.id)
    .then(store => {
        res.render('store/edit', {
      store: store,
      name: store.name
        });
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};
exports.create = (req, res) => {
    Store.create(req.body.store)
    .then( () => {
         res.redirect('/blogs');
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};
exports.update = (req, res) => {
    Store.updateOne({
        _id: req.body.id
    }, req.body.store, {
        runValidators: true
    })
    .then(() => {
        res.redirect(`/store/${req.body.id}`);
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};
exports.destroy = (req, res) => {
    Store.deleteOne({
        _id: req.body.id
    })
    .then(() => {
        res.redirect('/store'); 
    })
    .catch(err => {
        console.error(`ERROR: ${err}`);
    });
};


exports.drafts = (req, res) => {};
exports.published = (req, res) => {};