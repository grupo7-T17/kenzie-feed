import { z } from 'zod';

const checkLink = (value: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg'];
  return imageExtensions.some((extension) =>
    value.toLowerCase().includes(extension)
  );
};

export const editingSchema = z.object({
  title: z.string().nonempty('Obrigatorio informar um títutlo'),
  description: z.string().nonempty('Obrigatorio informar um conteúdo'),
  image: z.string().refine((value) => checkLink(value), {
    message: 'Obrigatório enviar um link que seja de imagem',
  }),
});

export type tEditingFormValues = z.infer<typeof editingSchema>;
