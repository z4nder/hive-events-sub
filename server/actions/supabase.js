import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const verifyRegisterHasExist = async (supabaseClient, email)  => {
    const { data, error } = await supabaseClient
        .from('send_emails')
        .select('*')
        .eq('to', email)
        .limit(1)

    if (error) {
        return false
    }
    
    if (data.length > 0) {
        return true 
    }
    
    return false 
}

export const insertEmailSend = async (supabaseClient, email, success, message)  => {
    await supabaseClient
        .from('send_emails')
        .insert([{ 
            to: email,
            from: 'contato@hivecommunity.dev',
            success: success,
            error: message,
            smtp: "sendgrid",
        }])
}