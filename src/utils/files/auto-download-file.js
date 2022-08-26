export const autoDownloadFile = (file) => {
  let link = document.createElement('a');
  link.download = `file.name`;
  
  // let blob = new Blob([file], { type: 'application/pdf' });
  link.href = URL.createObjectURL(file);
  link.href = file.url;
  link.click();
  URL.revokeObjectURL(link.href);
};
