import { z } from 'zod'

const feedbackSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'Nombre debe tener almenos 5 carácteres' }),
  subject: z.string(),
  comments: z.string().optional(),
})
