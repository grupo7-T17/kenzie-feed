import { z } from 'zod';

const checkLink = (value: string) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'];
  return imageExtensions.some((extension) =>
    value.toLowerCase().includes(extension)
  );
};

export const newPostSchema = z.object({
  title: z.string().nonempty('Obrigatório informar um títutlo'),
  description: z.string().nonempty('Obrigatório informar um conteúdo'),
  image: z.string().refine((value) => checkLink(value), {
    message:
      'Obrigatório enviar um link com um final: ".jpg", ".jpeg", ".png", ".svg" ou ".webp".',
  }),
});

export type tNewPostFormValues = z.infer<typeof newPostSchema>;
