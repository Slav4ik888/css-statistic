
export const autoLinkClick = (file) => {
  let link = document.createElement('a');
  link.download = file.name;

  link.href = file.url;
  link.target = `_blank`;
  link.click();
};
