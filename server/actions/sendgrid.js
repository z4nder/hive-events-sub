
import sgMail from '@sendgrid/mail'

const fromEmail = "contato@hivecommunity.dev"
const tempalteId = "d-1c287f5cab2f4219a14f1f62cfcc81fb"

export const sendSubEmail = async (sendgridClient, email)  => {
    const msg = {
        to: email, 
        from: fromEmail,
        templateId: tempalteId,
    }
    
    try {
        await sendgridClient.send(msg);
    return {success: true, message: null}
    } catch (error) {
        return {success: false, message: error}
    }
}