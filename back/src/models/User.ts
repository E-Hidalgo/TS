import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
  // timestamps: Date
  encryptPassword(password:string): Promise<string>;
  validatePassword(password:string): Promise<boolean>
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },

  //  timestamps: { createdAt: 'created_at' },
});

userSchema.methods.encryptPassword = async (password : string) : Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password)
}

export default model<IUser>("User", userSchema);
