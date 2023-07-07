import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Coloque seu e-mail cadastrado')
    .email('Informe um e-mail válido'),
  password: z.string().min(8, 'Coloque sua senha cadastrada'),
});

export type tLoginFormValues = z.infer<typeof loginSchema>;
