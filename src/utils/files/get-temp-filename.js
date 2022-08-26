
export const getTempFilename = (filename) => {
  // my.image.png => ['my', 'image', 'png']
  const fileExtention = filename.split(`.`)[filename.split(`.`).length - 1];
  // 93284987928.png
  return `${Math.round(
    Math.random() * 10000000000
  ).toString()}.${fileExtention}`;
};
