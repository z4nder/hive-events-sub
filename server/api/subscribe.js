
import { createSendGrid, sendSubEmail } from '../actions/sendgrid'
import { createSupabase, verifyRegisterHasExist, insertEmailSend } from '../actions/supabase'
const smtpClient = "sendgrid"

export default defineEventHandler(async (event) => {
  const form = await readBody(event)
  const to = form.email
  
  const supabaseClient = createSupabase(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

  const thatEmailHasRegister = await verifyRegisterHasExist(supabaseClient, to)
 
  if(thatEmailHasRegister){
    return true
  }

  let sendgridClient = createSendGrid(process.env.SENDGRID_API_KEY)

  const emailSendResponse = await sendSubEmail(sendgridClient, to)
  console.log("EMAIL SEND")
  await insertEmailSend(supabaseClient, to, emailSendResponse.success, emailSendResponse.message)

})