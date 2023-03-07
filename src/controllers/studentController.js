import Student from '../models/Aluno';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();
      return res.status(200).json({ Students: students });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: 'Id not found!' });
      }

      const students = await Student.findByPk(id);
      if (!students) {
        return res.status(400).json({ errors: 'Cannot find student' });
      }

      return res.status(200).json({ Student: students });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async store(req, res) {
    try {
      await Student.create(req.body);
      return res.status(200).json({ MSG: 'User created successful' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ Errors: 'Student not found' });
      }
      await student.update(req.body);
      return res.status(200).json({ MSG: 'Student updated!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);
      if (!student) {
        return res.status(400).json({ Errors: 'Student not found' });
      }
      await student.destroy();
      return res.status(200).json({ MSG: 'Student deleted!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new StudentController();
