import Sequelize, { Model } from 'sequelize';

export default class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Original name do not be null!',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'File name do not be null',
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
