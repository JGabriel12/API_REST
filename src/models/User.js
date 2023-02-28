import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          Type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Name cannot be null or have less than 4 characters',
            },
          },
        },

        email: {
          Type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Invalid Email',
            },
          },
        },

        password_hash: {
          Type: Sequelize.STRING,
          defaultValue: '',
        },

        password: {
          Type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 255],
              msg: 'Password cannot be null or have less than 6 characters',
            },
          },
        },
      },

      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
