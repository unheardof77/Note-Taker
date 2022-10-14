const notes = require(`./notes`);
const router = require(`express`).Router();

router.use(`/`, notes)

module.exports = router;