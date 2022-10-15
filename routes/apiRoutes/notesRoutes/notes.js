const router = require(`express`).Router();
const path = require(`path`);
const fs = require(`fs`);
const db = require(`../../../db/db.json`);

router.get(`/`, (req, res) =>{
    res.json(db);
});

router.post(`/`, (req, res) =>{
    const newData = req.body;
    newData.id =  new Date().getTime();
    db.push(newData);
    fs.writeFile(path.join(__dirname, `../../../db/db.json`), JSON.stringify(db), (err)=> err? console.log(err): console.log("Wrote data."));
    res.json(newData);
});

router.delete(`/:id`, (req, res) =>{
    for (i = 0; i < db.length; i ++){
        if(db[i].id == req.params.id){
            db.splice(i, 1);
        };
    };
    res.json("deleted")
});

module.exports = router;