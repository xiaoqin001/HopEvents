const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const cartRouter = require('./cart.js');
const eventRouter = require('./event.js');
const registerRouter = require('./register.js');
const eventdetailRouter = require('./eventdetail');
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/users/cart', cartRouter);

router.use('/event', eventRouter);

router.use('/register', registerRouter)

router.use('/eventdetails', eventdetailRouter)



// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });


//testing the user auth middleware routes.

// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }))

// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// )



module.exports = router;
