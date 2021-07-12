module.exports = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'secret_word',
  ACCESS_TOKEN_EXP_TIME: '10m',
  AUTHORIZATION: 'Authorization',
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/Les1',
  PORT: process.env.PORT || 3000,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refresh_secret_word',
  REFRESH_TOKEN_EXP_TIME: '10d',
  SYSTEMS_EMAIL: process.env.SYSTEMS_EMAIL || 'test@a.com.ua',
  SYSTEMS_EMAIL_PASSWORD: process.env.SYSTEMS_EMAIL_PASSWORD || '12345',
  TOKEN_TYPE: { ACCESS: 'acsess', REFRESH: 'refresh' },

  APLICATION_MAX_SIZE: 3 * 1024 * 1024, // 3MB
  IMAGE_MAX_SIZE: 2 * 1024 * 1024, // 2MB
  VIDEO_MAX_SIZE: 15 * 1024 * 1024, // 15MB

  APPLICATION_MIMETYPES: [
    'application/pot', // mspowerpoint
    'application/pps', // mspowerpoint
    'application/ppt', // mspowerpoint
    'application/ppz', // mspowerpoint
    'application/doc', // msword
    'application/dot', // msword
    'application/w6w', // msword
    'application/wiz', // msword
    'application/word', // msword
    'application/xl', // excel
    'application/xla', // excel
    'application/xlb', // excel
    'application/xlc', // excel
    'application/xld', // excel
    'application/xlk', // excel
    'application/xll', // excel
    'application/xlm', // excel
    'application/xls', // excel
    'application/xlt', // excel
    'application/xlv', // excel
    'application/xlw', // excel
    'application/csv', // excel
    'application/xml', // xml
    'application/zip', // zip
    'application/vsd', // x-visio
    'application/vst', // x-visio
    'application/vsw', // x-visio
  ],

  IMAGE_MIMETYPES: [
    'image/bm', // bmp
    'image/bmp', // bmp
    'image/flo', // florian
    'image/turbot', // florian
    'image/g3', // g3fax
    'image/gif', // gif
    'image/ief', // ief
    'image/iefs', // ief
    'image/jfif', // jpeg
    'tbnl	ijfif', // mage/jpeg
    'image/jpe', // jpeg
    'image/jpeg', // jpeg
    'image/jpg', // jpeg
    'image/jut', // jutvision
    'image/nap', // naplps
    'image/naplps', // naplps
    'image/pic', // pict
    'image/pict', // pict
    'image/jfif', // pjpeg
    'image/jpe', // pjpeg
    'image/jpeg', // pjpeg
    'image/jpg', // pjpeg
    'image/png', // png
    'image/tif', // tiff
    'image/tiff', // tiff
    'image/mcf', // vasa
    'image/dwg', // vnd.dwg
    'image/dxf', // vnd.dwg
    'image/svf', // vnd.dwg
    'image/fpx', // vnd.fpx
    'image/fpx', // vnd.net-fpx
    'image/rf', // vnd.rn-realflash
    'image/rp', // vnd.rn-realpix
    'image/wbmp', // vnd.wap.wbmp
    'image/xif', // vnd.xiff
    'image/ras', // x-cmu-raster
    'image/dwg', // x-dwg
    'image/dxf', // x-dwg
    'image/svf', // x-dwg
    'image/ico', // x-icon
    'image/art', // x-jg
    'image/jps', // x-jps
    'image/nif', // x-niff
    'image/niff', // x-niff
    'image/pcx', // x-pcx
    'image/pct', // x-pict
    'image/qif', // x-quicktime
    'image/qti', // x-quicktime
    'image/qtif', // x-quicktime
    'image/rgb', // x-rgb
    'image/tif', // x-tiff
    'image/tiff', // x-tiff
    'image/bmp', // x-windows-bmp
    'image/xbm', // x-xbitmap
    'image/xbm', // x-xbm
    'image/pm', // x-xpixmap
    'image/xpm', // x-xpixmap
    'image/xwd', // x-xwd
    'image/xwd', // x-xwindowdump
    'image/xbm', // xbm
    'image/xpm', // xpm
    'image/webp'
  ],

  VIDEO_MIMETYPES: [
    'video/afl', // animaflex
    'video/avi', // avi
    'video/avs', // avs-video
    'video/dl', // dl
    'video/fli', // fli
    'video/gl', // gl
    'video/m1v', // mpeg
    'video/m2v', // mpeg
    'video/mp2', // mpeg
    'video/mp3', // mpeg
    'video/mpa', // mpeg
    'video/mpe', // mpeg
    'video/mpeg', // mpeg
    'video/mpg', // mpeg
    'video/avi', // msvideo
    'video/moov', // quicktime
    'video/mov', // quicktime
    'video/qt', // quicktime
    'video/vdo', // vdo
    'video/viv', // vivo
    'video/vivo', // vivo
    'video/rv', // vnd.rn-realvideo
    'video/viv', // vnd.vivo
    'video/vivo', // vnd.vivo
    'video/vos', // vosaic
    'video/xdr', // x-amt-demorun
    'video/xsr', // x-amt-showrun
    'video/fmf', // x-atomic3d-feature
    'video/dl', // x-dl
    'video/dif', // x-dv
    'video/dv', // x-dv
    'video/fli', // x-fli
    'video/gl', // x-gl
    'video/isu', // x-isvideo
    'video/mjpg', // x-motion-jpeg
    'video/mp2', // x-mpeg
    'video/mp3', // x-mpeg
    'video/mp2', // x-mpeq2a
    'video/asf', // x-ms-asf
    'video/asx', // x-ms-asf
    'video/asx', // x-ms-asf-plugin
    'video/avi', // x-msvideo
    'video/qtc', // x-qtc
    'video/scm', // x-scm
    'video/movie', // x-sgi-movie
    'video/mv', // x-sgi-movie
    'video/mp4',
  ]
};
