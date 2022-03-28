import Router from 'koa-router';
import * as he from '../../controllers/helpers/index.js';
import * as a from '../../controllers/users/auth/index.js';
import * as us from '../../controllers/users/user/index.js';
import * as da from '../../controllers/data/index.js';
import * as ref from '../../controllers/ref-books/index.js';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';
import FBAuth from '../../firebase/fb-auth.js';


const router = new Router({ prefix: '/api' });


// USERS - Auth
router.post(`/sendPasswordResetEmail`, a.sendPasswordResetEmail);
router.post(`/userLogin`, a.userLogin);
router.post(`/userLogout`, a.userLogout);


// USERS - Data
router.get (`/getStartResourses`, FBAuth, us.getStartResourses);
router.get (`/getUser`, FBAuth, us.getUser);
router.post(`/updateUser`, FBAuth, us.updateUser);


// HELPERS 
router.post(`/loadCollection`, FBAuth, he.loadCollection);


// REFBOOKS
router.post(`/loadRefbooksByIds`, FBAuth, ref.loadRefbooksByIds);
router.post(`/deleteRole`, FBAuth, ref.deleteRole);

router.get(`/addRole`, FBAuth, ref.addRole);
router.post(`/updateRole`, FBAuth, ref.updateRole);
// router.post(`/addUser`, FBAuth, ref.addUser);
// router.get (`/loadUsers`, FBAuth, ref.loadUsers);

export default router;
