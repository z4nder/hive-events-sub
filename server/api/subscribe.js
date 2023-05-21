
import { createSendGrid, sendSubEmail } from '../actions/sendgrid'
import { createSupabase, verifyRegisterHasExist, insertEmailSend } from '../actions/supabase'
const smtpClient = "sendgrid"

export default defineEventHandler(async (event) => {
  const form = await readBody(event)
  const to = form.email
  
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY
  const supabase = createSupabase(supabaseUrl, supabaseKey)

  const thatEmailHasRegister = await verifyRegisterHasExist(supabase, to)
 
  if(thatEmailHasRegister){
    return true
  }

  let sendGridApiKey = process.env.SENDGRID_API_KEY
  let sendgrid = createSendGrid(sendGridApiKey)

  const emailSendResponse = await sendSubEmail(sendgrid, to)
  console.log("EMAIL SEND")
  await insertEmailSend(supabase, to, emailSendResponse.success, emailSendResponse.message)

})