  
export enum MimeType {
  JPEG = `image/jpeg`,
  JPG  = `image/jpg`,
  PNG  = `image/png`,
  GIF  = `image/gif`,
  PDF  = `./pdf`,
};


// Тип данных по загруженному файлу, например в answer
export type FileType = {
  name      : string;
  url       : string;
  mimetype? : MimeType;
  // data: Buffer;
  // size: number;
  // encoding: string;
};

export type ResFileResult = FileType & { createdAt: string };

export type FileTypeWithData = ResFileResult & {
  taskId : string,
  id     : string // Answer Id
};

export type FileData = {
  size: number;
  name: string;
};

export enum FileOperationType {
  ANSWER_TASK = `answer_task`,
  PROFILE     = `profile`,
  PAYMENT     = `payment`
};
