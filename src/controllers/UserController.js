import User from '../models/User';

class HomeController {
  async store(req, res) {
    try {
      await User.create(req.body);
      res.status(200).json('User Created Successful!');
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default new HomeController();
