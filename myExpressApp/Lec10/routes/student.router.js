const router = require('express').Router();
const { Op } = require('sequelize');
const db = require('../dataBase/MySQL').getInstance();

router.get('/', async (req, res) => {
  const Student = db.getModel('Student');

  const { perPage = 20, page = 1, ...otherOption } = req.query;

  const offset = perPage * (page - 1);
  let where = {};

  if (otherOption['age.gte']) {
    where = {
      ...where,
      age: {
        [Op.gte]: otherOption['age.gte']
      }
    };
  }

  //   const student = await Student.findAll({
  //     attributes: [
  //       'name',
  //       'age'
  //     ],
  //     where: {
  //       id: req.query.id
  //     }
  //   });

  const students = await Student.findAll({
    where,
    raw: true,
    limit: +perPage,
    offset
  });

  res.status(200).json(students);
});

module.exports = router;
