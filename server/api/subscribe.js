
import { sendgrid, sendSubEmail } from '../actions/sendgrid'
import { supabase, verifyRegisterHasExist, insertEmailSend } from '../actions/supabase'
const smtpClient = "sendgrid"

export default defineEventHandler(async (event) => {
  const form = await readBody(event)
  const to = form.email

  const thatEmailHasRegister = await verifyRegisterHasExist(supabase, to)
 
  if(thatEmailHasRegister){
    console.log("EMAIL NOT SEND")
    return true
  }

  const emailSendResponse = await sendSubEmail(sendgrid, to)
  console.log("EMAIL SEND")
  await insertEmailSend(supabase, to, emailSendResponse.success, emailSendResponse.message)

})