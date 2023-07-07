import { z } from "zod";

export const registerFormScheme = z.object({
    name: z.string().min (3,"O nome é obrigatório."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um email válido"),
    password: z.string()
        .min(8, "A senha precisa precisa de 8 caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula ")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma minúscula ")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos número")
        .regex(/^(?=.*[#?!@$%^&*-])/, "É necessário pelo menos um caracteres especial "),
    
    confirmPassword: z.string().min(1, "A confirmação é obrigatória"),
   
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "A confirmação e a senha precisam correspoder",
    path: ["confirmPassword"],
})

export type TRegisterFormScheme = z.infer<typeof registerFormScheme>;