import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { SECRET } from '../../jwt';

const SALT_WORK_FACTOR = 10;

const isUser = async (username, ctx) => ctx.app.users.findOne({ username });

const registerUser = async (ctx) => {
  const user = ctx.request.body;
  
  console.log(user);
  if (await isUser(user.username, ctx)) {
    ctx.response.status = 409;
  } else {
    const hashedPassword = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
    const result = await ctx.app.users.insert({
      username: user.username,
      password: hashedPassword,
      favorites: [],
    });

    if (result.result.ok === 1) {
      ctx.response.status = 201;
    } else {
      ctx.response.status = 404;
    }
  }
};

const isValidPassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

const sign = payload => jsonwebtoken.sign(payload, SECRET);

/* eslint-disable no-underscore-dangle */
const getToken = async (ctx) => {
  const userInfo = ctx.request.body;
  const user = await isUser(userInfo.username, ctx);
  console.log(userInfo.password);
  console.log(user.password);
  if (user) {
    if (await isValidPassword(userInfo.password, user.password)) {
      ctx.body = {
        token: sign({
          id: user._id,
        }),
      };
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Invalid login' };
    }
  } else {
    ctx.status = 401;
    ctx.body = { error: 'Invalid login' };
  }
};

/* eslint-enable */

export { registerUser, getToken };
