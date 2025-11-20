import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export default defineEventHandler(async (event) => {
  try {
    // Read and parse request body
    const body = await readBody(event)
    
    // Validate data
    const validatedData = contactSchema.parse(body)
    
    // TODO: In production, save to database
    // await db.contacts.create(validatedData)
    
    // TODO: Send email notifications
    // await sendAdminEmail(validatedData)
    // await sendCustomerEmail(validatedData)
    
    // Generate contact ID
    const contactId = `CT${Date.now()}`
    
    // Log for development
    console.log('New contact form submission:', {
      contactId,
      ...validatedData
    })
    
    // Return success response
    return {
      success: true,
      contactId,
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
    }
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid data',
        data: error.errors
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})