import User from '../models/User';

class HomeController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        name: 'Gabriel',
        last_name: 'Marinho',
        email: 'gabriel.marinho@hotmail.com',
        password: '123456',
      });
      res.json(novoUser);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new HomeController();
