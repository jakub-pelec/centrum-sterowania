import { object, string } from 'yup';

export const loginSchema = object({
    email: string().email(),
    password: string()
})