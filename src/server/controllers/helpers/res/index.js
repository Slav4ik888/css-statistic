
export const res = (ctx, status, data, loggerData, logMessage) => {

  ctx.status = status;
  ctx.body   = data;
  loggerData.info(logMessage);
};
