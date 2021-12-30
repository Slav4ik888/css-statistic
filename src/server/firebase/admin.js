import admin from 'firebase-admin';
import serviceAccount from '../../../archive/configs/adminsdk-key.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { admin, db };
