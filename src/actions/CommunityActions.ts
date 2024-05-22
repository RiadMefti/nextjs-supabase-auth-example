'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'


export async function createCommunity(formData: FormData) {

    if (formData.get('communityName') === '' || formData.get('communityDescription') === '' || (formData.get('communityImage') as File).size === 0) {
        return 'Please fill in all fields'
    }





    const supabase = createClient()

    //check if name is already taken

    const { data: communityName } = await supabase.from('community').select('name').eq('name', formData.get('communityName'))
    if (communityName) {
        if (communityName.length > 0)
            return 'Community name already taken'
    }

    //check if the file is an valid image
    const file = formData.get('communityImage') as File
    if (!file.type.includes('image')) {
        return 'Please upload an image'
    }
    const { data: user } = await supabase.auth.getUser()
    const { error } = await supabase.from('community').insert([{
        name: formData.get('communityName') as string,
        description: formData.get('communityDescription') as string,
        owner_email: user?.user?.email
    }])



    //get the id of the community
    const { data: community } = await supabase.from('community').select('id').eq('name', formData.get('communityName'))
    if (community) {
        await supabase.storage.from('community').upload(community[0].id, (formData.get('communityImage') as File))

    }
    if (error) {
        console.log(error)
        return error.message
    }
    return null
}