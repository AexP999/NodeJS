// const mysql2 = require('mysql2');

// const connection = mysql2.createConnection({
//   user: 'user',
//   password: 'user',
//   database: 'dec-2020',
//   host: 'localhost'
// });

// module.exports = connection.promise();

const Sequalize = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
  let instance;

  const initConnection = () => {
    const client = new Sequalize('dec-2020', 'user', 'user', { dialect: 'mysql' });

    const models = {};
    const modelsDirectory = path.join(process.cwd(), 'dataBase', 'MySQL', 'models');

    const readAndSetModels = () => {
      fs.readdir(modelsDirectory, (err, files) => {
        files.forEach((file) => {
          const [modelName] = file.split('.');
          // eslint-disable-next-line import/no-dynamic-require
          const modelFile = require(path.join(modelsDirectory, file));

          models[modelName] = modelFile(client);
        });
      });
    };

    return {
      getModel: (modelName) => models[modelName],
      setModel: () => readAndSetModels()

    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = initConnection();
      }
      return instance;
    }
  };
})();
