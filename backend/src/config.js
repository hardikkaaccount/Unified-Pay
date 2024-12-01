import dotenv from 'dotenv';
dotenv.config();

//  keys and constants
// const mongoURI = process.env.MONGO_URI;
const mongoURI = "mongodb://localhost:27017/";
const jwtSecret = 'eyJhbGciOiAiSFMyNTYiLCJ0eXAiOiAiSldUIn0.eyJzdWIiOiAiMTIzNDU2Nzg5MCIsIm5hbWUiOiAiSm9obiBEb2UiLCJpYXQiOiAxNTE2MjM5MDIyLCJleHBpcmVkX3Vub24iOiAxNTE2MjQyNjIyfQ.X0_TyOBdH78LRgFJ0BcjswT-9NG7qdkm7mjks5QF5FZAwgkH7j4T7ACHe3H5BxOpoF9AfzXbd7lwrgh4Sy_mwzOSXKxhlXNOJw3hLwhg';
// const currencyApiKey = process.env.CURRENCY_API_KEY;
const currencyApiKey = "49896aedc8e110e56b053ae3db1b981d";
// const cryptoApiKey = process.env.CRYPTO_API_KEY;
const cryptoApiKey = "sdfasdf";
const razorpay_key_id = "rzp_test_j1evu9RVxuBdwx";
const razorpay_key_secret = "wSau6JRBrjKLS5DlX5HZaBJE";


export { 
    mongoURI, 
    jwtSecret, 
    currencyApiKey, 
    cryptoApiKey,
    razorpay_key_id, 
    razorpay_key_secret,
};
