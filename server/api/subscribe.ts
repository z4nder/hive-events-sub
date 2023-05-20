
import sgMail from '@sendgrid/mail'

export default defineEventHandler(async (event) => {
  const form = await readBody(event)
  //#TOOD inserir em um db o email, caso ja tenha n envia...
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const msg = {
    to: form.email, 
    from: 'contato@hivecommunity.dev',
    subject: 'Hive Community - Inscrito com sucesso',
    templateId: 'd-1c287f5cab2f4219a14f1f62cfcc81fb',
    dynamicTemplateData: {
      nome: 'Nome do destinatário',
    },
  }
 
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      // #TODO Tratar oq fazer caso a API va de ralo, salver em um excel os emails n sei
      console.error(error)
    })
})