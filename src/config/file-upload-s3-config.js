// import multer from 'multer';
// import multerS3 from 'multer-s3';
// import aws from 'aws-sdk';
// import { S3 } from '@aws-sdk/client-s3';
// import dotenv from 'dotenv';

// dotenv.config();

// // JS SDK v3 does not support global configuration.
// // Codemod has attempted to pass values to each service client in this file.
// // You may need to update clients outside of this file, if they use global config.
// aws.config.update({
//     region: process.env.AWS_REGION,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     accessKeyId: process.env.ACCESS_KEY_ID
// });

// const s3 = new S3({
//     region: process.env.AWS_REGION,

//     credentials: {
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//         accessKeyId: process.env.ACCESS_KEY_ID
//     }
// });

// const upload = multer({
//     storage: multerS3({
//         s3:s3,
//         bucket: process.env.BUCKET_NAME,
//         acl: 'public-read',
//         metadata: function (req, file, cb) {
//             cb(null, {fieldName: file.fieldname});
//         },
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
// });

// export default upload;