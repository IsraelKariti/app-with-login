// LogoutButton.tsx
import {supabaseClient} from '../supabase/supabaseClient';

const LogoutButton = () => {
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      alert('Logout failed: ' + error.message);
    } else {
      // Optional: refresh page or redirect
      window.location.reload();
    }
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
