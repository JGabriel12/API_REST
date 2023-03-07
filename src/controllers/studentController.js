import Student from '../models/Aluno';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }
}

export default new StudentController();
