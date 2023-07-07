import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min (3,"O nome é obrigatório."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string()
        .min(8, "É necessário ao menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos número")
        .regex(/^(?=.*[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial"),
    
    confirmPassword: z.string().min(1, "A confirmação é obrigatória"),
   
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas precisam corresponder",
    path: ["confirmPassword"],
})

export type tRegisterFormSchema = z.infer<typeof registerFormSchema>;