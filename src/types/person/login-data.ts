// Запрашиваемые данные при входе в аккаунт
export interface UserLoginData {
  email        : string | FormDataEntryValue;
  mobileNumber?: string | FormDataEntryValue;
};
