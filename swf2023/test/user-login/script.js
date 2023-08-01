const apiUrl = 'http://localhost:8000/auth';

async function getNonce() {
  try {
    const response = await axios.post(`${apiUrl}/nonce`);
    return response.data.nonce;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function loginWithMetaMask() {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask not detected. Please install MetaMask and connect to the correct network.');
    return;
  }

  const nonce = await getNonce();
  if (!nonce) {
    alert('Failed to get nonce from the server.');
    return;
  }

  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const address = accounts[0];
    const message = `Login to my app with nonce: ${nonce}`;

    const signedMessage = await window.ethereum.request({
      method: 'personal_sign',
      params: [message, address],
    });

    const loginData = {
      signedMessage: signedMessage,
      message: message,
      address: address,
    };

    const response = await axios.post(`${apiUrl}/login`, loginData);
    console.log(response.data);
    alert('Login successful!');
  } catch (error) {
    alert('An error occurred during login.');
    console.error(error);
  }
}

document.getElementById('loginButton').addEventListener('click', loginWithMetaMask);
