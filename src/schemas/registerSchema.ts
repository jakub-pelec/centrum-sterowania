import { FieldValues } from "react-hook-form";
import { InferType, object, ref, string, TypeOf } from "yup";

export const registerSchema = object({
    email: string().email(),
    password: string(),
    confirmPassword: string().oneOf([ref('password'), null]),
    firstName: string(),
    lastName: string()
})

export type TRegisterSchema = InferType<typeof registerSchema>;