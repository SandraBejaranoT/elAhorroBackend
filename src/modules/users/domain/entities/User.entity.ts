// User.entity.ts
import { Schema, model, Document } from 'mongoose';
import { IUser } from '../interfaces/IUser.interface';

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const User = model<IUser>('User', userSchema);

export default User;
