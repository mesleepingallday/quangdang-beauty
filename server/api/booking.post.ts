import { z } from 'zod'

// Validation schema
const bookingSchema = z.object({
  serviceId: z.string().min(1, 'Service is required'),
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
  preferredDate: z.string().min(1, 'Date is required'),
  preferredTime: z.string().min(1, 'Time is required'),
  message: z.string().optional()
})

export default defineEventHandler(async (event) => {
  try {
    // Read and parse request body
    const body = await readBody(event)
    
    // Validate data
    const validatedData = bookingSchema.parse(body)
    
    // TODO: In production, save to database
    // await db.bookings.create(validatedData)
    
    // TODO: Send email notifications
    // await sendCustomerEmail(validatedData)
    // await sendAdminEmail(validatedData)
    
    // Generate booking ID
    const bookingId = `BK${Date.now()}`
    
    // Log for development
    console.log('New booking received:', {
      bookingId,
      ...validatedData
    })
    
    // Return success response
    return {
      success: true,
      bookingId,
      message: 'Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.'
    }
  } catch (error) {
    console.error('Booking error:', error)
    
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