
export default function isActive(user) {
  return Boolean(user?.active)
};

export const noActive = (user) => !isActive(user);