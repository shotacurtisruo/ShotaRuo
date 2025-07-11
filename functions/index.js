const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.submitEmail = functions.https.onRequest((req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { email } = req.body;
  
  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  // Store email in Firestore
  admin.firestore().collection('emails').add({
    email: email,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    res.status(200).json({ message: 'Email saved successfully' });
  })
  .catch((error) => {
    console.error('Error saving email:', error);
    res.status(500).json({ error: 'Failed to save email' });
  });
}); 