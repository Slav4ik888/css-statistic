
export const updatedLastChange = (data, userId) => ({
  ...data,

  lastChange: {
    userId,
    date: new Date().toISOString(),
  },
});
