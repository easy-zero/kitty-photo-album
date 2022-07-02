/**
 * BreadCrumb Path
 */
export const getPath = (pwd: string): string => {
  const pwdArr = pwd.split(" - ");
  pwdArr.pop();

  const newPwd = pwdArr.join(" - ");

  return newPwd;
};
