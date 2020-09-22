'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/list', controller.home.list);
  router.post('/msg', controller.home.msg);
  router.get('/getmsg', controller.home.getmsg);
  router.post('/delmsg', controller.home.delmsg);
  router.post('/changemsg', controller.home.changemsg);

  
};
