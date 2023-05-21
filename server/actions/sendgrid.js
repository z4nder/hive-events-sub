const fromEmail = "contato@hivecommunity.dev"
const tempalteId = "d-01be8ef2ee4647d4a5bfc5c118fc25f4"


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