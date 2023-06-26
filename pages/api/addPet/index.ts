import { NextApiHandler, NextApiRequest } from "next";
import Pet from "../../../services/db/models/pet";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import {uuid} from 'uuidv4';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {
    multiples:true,
    filter: (file)=>{
      return file.mimetype && file.mimetype.startsWith('image/');
    }
  };
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images/uploaded");
    options.filename = (name, ext, path, form) => {
      const uniqueId = uuid();
      const extension = path.originalFilename.split(".").pop();
      return uniqueId+'.'+ extension;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
 
 
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      const imageNames = Object.values(files).map((file:any) => file.newFilename);
      fields.link = imageNames;
      Pet.methods.insertPet(fields)
      .then((res)=>{
        resolve({ fields, files });     
      }).
      catch((err)=>{
        console.log(err)
      })
    });
  });

};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public","/images"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public","/images"));
  }
  await readFile(req, true);
  res.json({ done: "ok" });
};

export default handler;


