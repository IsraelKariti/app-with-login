// AuthWrapper.tsx
import { useEffect, useState, createContext, useContext } from 'react';
import {supabaseClient} from '../supabase/supabaseClient';
import type { Session, User } from '@supabase/supabase-js';
import SignInWithGoogle from '../buttons/SignInWithGoogle';
import { isEmailInWhitelist } from '../db/whitelist';
import AccessDeniedNotice from '../pages/AccessDeniedNotice';

type AuthContextType = {
  user: User | null;
  session: Session | null;
}

export const AuthContext = createContext<AuthContextType>({
  user: null, 
  session: null
})

export const useAuth = ()=>{
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isUserInWhitelist, setIsUserInWhitelist] = useState(false);

  useEffect(() => {

    // Check initial session
    supabaseClient.auth.getSession()
    .then(({ data: { session } }) => {
      setSession(session ?? null);  
      setUser(session?.user ?? null);
      setLoading(false);
      return session?.user?.email ?? '';
    })
    .then(async (email)=>{
      const res = await isEmailInWhitelist(email)
      setIsUserInWhitelist(res);
    })

    // Listen for login/logout events
    const { data: listener } = supabaseClient.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) return <SignInWithGoogle/>

  if(!isUserInWhitelist) return <AccessDeniedNotice/>
  
  return <AuthContext.Provider value={{session, user}}>
            {children}
          </AuthContext.Provider>;
};
