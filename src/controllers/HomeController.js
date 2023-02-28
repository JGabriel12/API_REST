import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        name: 'Gabriel',
        last_name: 'Marinho',
        email: 'gabriel.marinho@hotmail.com',
        age: 23,
        weight: 89,
        height: 2,
      });
      res.json(novoAluno);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new HomeController();
