import { supabaseClient } from "../supabase/supabaseClient";

export const getWhitelist = async () => {
    const { data, error } = await supabaseClient
        .from('whitelist')
        .select('*');

    if (error) {
        console.error('Error fetching whitelist:', error.message);
        return [];
    }
    console.log(data);
      
  return data;
};

export const isEmailInWhitelist = async (email: string): Promise<boolean> => {
    const { data, error } = await supabaseClient
        .from('whitelist')
        .select('id')
        .eq('email', email);

    if (error) {
        console.error('Error fetching whitelist:', error.message);
        return false;
    }
    console.log(data);
    return !!data.length;
};