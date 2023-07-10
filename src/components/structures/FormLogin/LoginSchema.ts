import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Informe seu e-mail cadastrado')
    .email('Informe um e-mail válido'),
  password: z.string().min(8, 'Informe sua senha cadastrada'),
});

export type tLoginFormValues = z.infer<typeof loginSchema>;
