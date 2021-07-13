const {
  constants: {
    APPLICATION_MIMETYPES,
    APLICATION_MAX_SIZE,
    IMAGE_MIMETYPES,
    IMAGE_MAX_SIZE,
    VIDEO_MIMETYPES,
    VIDEO_MAX_SIZE
  }
} = require('../constants');

module.exports = {
  checkFilesForSizeAndType: (req, res, next) => {
    try {
      const files = Object.values(req.files);

      const applicationDocs = [];
      const images = [];
      const videos = [];

      for (const file of files) {
        const { size, mimetype } = file;

        if (APPLICATION_MIMETYPES.includes(mimetype)) {
          if (size > APLICATION_MAX_SIZE) {
            throw new Error(`Allowed files up to ${APLICATION_MAX_SIZE} Bytes only`);
          }

          applicationDocs.push(file);
        } else if (IMAGE_MIMETYPES.includes(mimetype)) {
          if (size > IMAGE_MAX_SIZE) {
            throw new Error(`Allowed files up to ${IMAGE_MAX_SIZE} Bytes only`);
          }

          images.push(file);
        } else if (VIDEO_MIMETYPES.includes(mimetype)) {
          if (size > VIDEO_MAX_SIZE) {
            throw new Error(`Allowed files up to ${VIDEO_MAX_SIZE} Bytes only`);
          }

          videos.push(file);
        } else {
          throw new Error('Wrong file format');
        }
      }

      req.applicationDocs = applicationDocs;
      req.images = images;
      req.videos = videos;

      next();
    } catch (e) {
      next(e);
    }
  }

};
