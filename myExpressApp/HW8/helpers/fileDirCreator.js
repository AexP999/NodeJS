const { promisify } = require('util');
const path = require('path');
const uuid = require('uuid').v1;
const fs = require('fs');

const mkdirPromise = promisify(fs.mkdir);

module.exports = {
  fileDC: async (fileName, itemId, itemType) => {
    const imagePathUsersIdDirname = path.join(itemType, itemId.toString(), 'images');
    const imageDirectory = path.join(process.cwd(), 'static', imagePathUsersIdDirname);

    const fileExtension = fileName.split('.').pop();
    const imageUuidName = `${uuid()}.${fileExtension}`;

    const totalPath = path.join(imageDirectory, imageUuidName);

    await mkdirPromise(imageDirectory, { recursive: true });

    return {
      totalPath,
      imagePath: path.join(imagePathUsersIdDirname, imageUuidName)

    };
  }

};
