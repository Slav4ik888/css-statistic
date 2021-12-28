import { initializeApp } from 'firebase/app';
import firebaseConfig from './configs/fb-key.js';

const app = initializeApp(firebaseConfig);

export default app;