
export const getAddBtnLabelById = (refBookId: string) => {
  switch (refBookId) {
    case 'addresses': return `новый адрес`;
    case 'contacts' : return `новый контакт`;
  }
}