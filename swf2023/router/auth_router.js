const express = require("express");
const argon2 = require("argon2");
const ethers = require('ethers');
const { authService } = require('../service/auth_service.js');
const userService = require('../service/user_service.js');
const {
  NONCE,
  REFRESH,
  LOGIN,
  INTERNAL_ERROR,
  INVALID_SIGNATURE_ERROR,
  USER_CREATION_ERROR,
  TOKEN_ISSUE_ERROR,
  INVALID_TOKEN_ERROR,
  NO_USER_ERROR,
} = require('../api_responses.js');

const authRouter = express.Router();

authRouter.post('/nonce', async (req, res) => {
  try {
    const nonce = await argon2.hash("nonce");
    res.status(NONCE.code).json({ message: NONCE.message, nonce });
  } catch (error) {
    res.status(INTERNAL_ERROR.code).json({ error: INTERNAL_ERROR.message });
  }
});

authRouter.post('/login/ambulance', async (req, res) => {
  const { signedMessage, message, address } = req.body;
  const recoveredAddress = ethers.utils.verifyMessage(message, signedMessage);
  
  if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
    return res.status(INVALID_SIGNATURE_ERROR.code).json({ error: INVALID_SIGNATURE_ERROR.message });
  }

  if (await userService.checkAmbulanceExist(address) == false) {
    return res.status(NO_USER_ERROR.code).json({ error: NO_USER_ERROR.message });
  }

  try {
    const tokens = await authService.issueToken({ address });
    res.status(LOGIN.code).json({ message: LOGIN.message, tokens });
  } catch (error) {
    console.error(error);
    res.status(TOKEN_ISSUE_ERROR.code).json({ error: TOKEN_ISSUE_ERROR.message });
  }
});

authRouter.post('/login/hospital', async (req, res) => {
  const { signedMessage, message, address } = req.body;
  const recoveredAddress = ethers.utils.verifyMessage(message, signedMessage);
  
  if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
    return res.status(INVALID_SIGNATURE_ERROR.code).json({ error: INVALID_SIGNATURE_ERROR.message });
  }

  if (await userService.checkHospitalExist(address) == false) {
    return res.status(NO_USER_ERROR.code).json({ error: NO_USER_ERROR.message });
  }

  try {
    const tokens = await authService.issueToken({ address });
    res.status(LOGIN.code).json({ message: LOGIN.message, tokens });
  } catch (error) {
    console.error(error);
    res.status(TOKEN_ISSUE_ERROR.code).json({ error: TOKEN_ISSUE_ERROR.message });
  }
});

authRouter.post('/user/ambulance', async (req, res) => {
  const { address, name } = req.body;
  if (await userService.checkAmbulanceExist(address) == false) {
    try {
      await userService.createAmbulance({ address, name });
    } catch (error) {
      console.error(error);
      return res.status(USER_CREATION_ERROR.code).json({ error: USER_CREATION_ERROR.message });
    }
  }
});

authRouter.post('/user/hospital', async (req, res) => {
  const { address, name, location } = req.body;
  if (await userService.checkHospitalExist(address) == false) {
    try {
      await userService.createHospital({ address, name, location });
    } catch (error) {
      console.error(error);
      return res.status(USER_CREATION_ERROR.code).json({ error: USER_CREATION_ERROR.message });
    }
  }
});

authRouter.post('/refresh', async (req, res) => {
  try {
    const payload = await authService.verifyRefreshToken(req.token);
    try {
      const tokens = await authService.issueToken({ address });
      res.status(REFRESH.code).json({ message: REFRESH.message, tokens });
    } catch (error) {
      console.error(error);
      res.status(TOKEN_ISSUE_ERROR.code).json({ error: TOKEN_ISSUE_ERROR.message });
    }
  } catch (error) {
    console.error(error);
    res.status(INVALID_TOKEN_ERROR.code).json({ error: INVALID_TOKEN_ERROR.message });
  }
});

module.exports = authRouter;

