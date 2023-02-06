const express = require('express');
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const router = express.Router();

// User Login API Route
router.post(
    '/',
    asyncHandler(async (req, res, next) => {
        const { credential, password } = req.body;

        const user = await User.login({ credential, password });

        if (!user) {
            const err = new Error('Login failed');
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid.'];
            err.status = 401;
            return next(err);
        }

        await setTokenCookie(res, user);

        return res.json({ user });
    })

);

router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);


module.exports = router;