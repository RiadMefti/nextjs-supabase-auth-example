'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const dataForm = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,

    }
    console.log(dataForm)

    const { error, data } = await supabase.auth.signInWithPassword(dataForm)


    if (error) {
        console.log(error)
        return error.message


    }



    revalidatePath('/', 'layout')
    redirect('/')
}


export async function resetPassword(formData: FormData, redirect: string) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const dataForm = {
        email: formData.get('email') as string,


    }

    console.log(redirect)

    const { error, data } = await supabase.auth.resetPasswordForEmail(dataForm.email, {
        redirectTo: redirect
    }
    )

    if (error) {
        console.log(error)
        return error.message
    }

    console.log(data)

    return null
}

export async function updatePassword(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const dataForm = {
        password: formData.get('password') as string,


    }

    console.log(supabase.auth.getSession())

    const { error, data } = await supabase.auth.updateUser({
        password: dataForm.password

    })

    if (error) {
        console.log(error)
        return error.message
    }

    revalidatePath('/', 'layout')
    redirect('/')

}
export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const dataform = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        options: {
            data: {
                username: formData.get('username') as string
            }
        }
    }

    const { error, data } = await supabase.auth.signUp(dataform)

    console.log(formData)

    if (error) {
        console.log(error)
        return error.message
    }







    revalidatePath('/', 'layout')
    redirect('/')
}

export async function validateSingup(formData: FormData) {
    //check if username exists in the database
    //check if email exists in the database
    //check if password match

    const supabase = createClient()

    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if ((password !== confirmPassword)) {
        console.log('Passwords do not match')
        return 'Passwords do not match'
    }


    const { data: user, error } = await supabase.from('users').select('username').eq('username', username).single()

    if (user) {
        console.log('Username already exists')
        return 'Username already exists'
    }

    const { data: userEmail, error: emailError } = await supabase.from('users').select('email').eq('email', email).single()

    if (userEmail) {
        console.log('Email already exists')
        return 'Email already exists'
    }


    console.log('all good')

    return null

}

export async function logout() {

    const supabase = createClient()



    await supabase.auth.signOut()



    revalidatePath('/', 'layout')
    redirect('/')
}

export async function revalidate() {
    revalidatePath('/', 'layout')
    redirect('/')
}