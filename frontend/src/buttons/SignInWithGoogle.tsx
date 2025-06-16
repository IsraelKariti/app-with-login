import { supabaseClient } from "../supabase/supabaseClient";

const signInWithGoogle = async () => {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
      options: {
        redirectTo: import.meta.env.VITE_SITE_URL
      }
  });
    if (error) {
    console.error('Google login error:', error.message);
  }
};

function SignInWithGoogle() {

  return (
    <>
      <button
        onClick={signInWithGoogle}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '6px',
          padding: '8px 16px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          style={{ width: 20, height: 20 }}
        />
        Sign in with Google
      </button>
    </>
  )
}

export default SignInWithGoogle
