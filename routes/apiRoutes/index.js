const notesRoutes = require(`./notesRoutes`);
const router = require(`express`).Router();

router.use(`/notes`, notesRoutes);

module.exports = router;