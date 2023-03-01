import User from '../models/User';

class HomeController {
  async store(req, res) {
    try {
      await User.create(req.body);
      return res.status(200).json('User Created Successful!');
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll(req.body);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      // Check if id exist
      if (!id) return res.status(400).json({ Errors: 'ID not found' });

      const user = await User.findByPk(id);

      // Check if user exist
      if (!user) return res.status(400).json({ Errors: 'User not found' });

      await user.update(req.body);
      return res.status(200).json({ MSG: 'User updated successful' });
    } catch (error) {
      return res.status(400).json({ MSG: error });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ Error: 'ID not found' });

      const user = await User.findByPk(id);

      if (!user) return res.status(400).json({ Error: 'User not found' });

      await user.destroy();
      return res.status(200).json({ MSG: 'User deleted successful' });
    } catch (error) {
      return res.status(400).json({ MSG: error });
    }
  }
}

export default new HomeController();
