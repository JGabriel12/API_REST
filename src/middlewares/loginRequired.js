import jwt from 'jsonwebtoken'; // imports the jwt package
import User from '../models/User'; // imports the user model

export default async (req, res, next) => {
  // exports an async middleware function that takes req, res, and next as parameters
  const { authorization } = req.headers;
  // destructures the request headers to get the value of the authorization token

  if (!authorization) {
    // checks if the authorization token is not present
    return res.status(401).json({ ERROR: 'Login required' }); // responds with a 401 error indicating that login is required
  }

  const [, token] = authorization.split(' '); // removes the "Bearer " string from the beginning of the authorization token

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // decodes the authorization token using the secret key
    const { id, email } = dados; // gets the user ID and email from the decoded data

    const user = await User.findOne({
      // searches for the user in the database
      where: {
        id,
        email,
      },
    });

    if (!user) {
      // checks if the user was not found
      return res.status(401).json({ error: 'Invalid User' }); // responds with a 401 error indicating that the user is invalid
    }

    req.userId = id; // assigns the user ID to the userId property of the req object
    req.userEmail = email; // assigns the user email to the userEmail property of the req object

    return next(); // calls the next middleware function in the chain
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' }); // responds with a 401 error indicating that the token is invalid
  }
};
