import { z } from 'zod';

export const editingSchema = z.object({
  title: z.string().nonempty('Obrigatorio informar um títutlo'),
  description: z.string().nonempty('Obrigatorio informar um conteúdo'),
  image: z.string().nonempty('Obrigatorio informar uma imagem'),
});

export type tEditingFormValues = z.infer<typeof editingSchema>;
