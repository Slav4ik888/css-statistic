import Router from 'koa-router';
import * as he from '../../controllers/helpers/index.js';
import * as a from '../../controllers/users/auth/index.js';
import * as us from '../../controllers/users/user/index.js';
import * as da from '../../controllers/data/index.js';
import * as ref from '../../controllers/ref-books/index.js';
// import { mustBeAuthenticated } from '../../libs/verifications/must-be-authenticated.js';
import FBAuth from '../../firebase/fb-auth.js';
import * as Path from '../../../utils/paths/index.js';


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
router.post(Path.Helpers.LOAD_COLLECTION, FBAuth, he.loadCollection);


// REFBOOKS
router.post(Path.Refbook.LOAD_REF_BY_IDS, FBAuth, ref.loadRefbooksByIds);

router.get (Path.Roles.ADD,    FBAuth, ref.addRole);
router.post(Path.Roles.UPDATE, FBAuth, ref.updateRole);
router.post(Path.Roles.DELETE, FBAuth, ref.deleteRole);

router.post(Path.Users.ADD,    FBAuth, ref.addUser);
router.post(Path.Users.UPDATE, FBAuth, ref.updateUser);
router.post(Path.Users.DELETE, FBAuth, ref.deleteUser);
// router.get (`/loadUsers`, FBAuth, ref.loadUsers);

export default router;
