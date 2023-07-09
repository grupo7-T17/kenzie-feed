import { z } from 'zod';

const checkLink = (value: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg'];
  return imageExtensions.some((extension) =>
    value.toLowerCase().includes(extension)
  );
};

export const creatingSchema = z.object({
  title: z.string().nonempty('Obrigatório informar um títutlo'),
  description: z.string().nonempty('Obrigatório informar um conteúdo'),
  image: z.string().refine((value) => checkLink(value), {
    message: 'Obrigatório enviar um link que seja de imagem',
  }),
});

export type tCreatingFormValues = z.infer<typeof creatingSchema>;