const router = require('express').Router();

router.get(`/`, (request,  response) => {
    response.send(`Hey 'dere World!`);
});

router.get('/about', (request, response) => {
    response.send(`I like long walks on the beach.`);
    });

    module.exports = router;