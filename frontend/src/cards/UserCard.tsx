// components/UserCard.tsx
import { cardStyle, infoStyle, nameStyle, emailStyle, providerTagStyle } from "./CardStyles";
import { useAuth } from "../wrappers/AuthProvider";

const UserCard = () => {
  const { user } = useAuth();

  if (!user) return null;

  const name = user.user_metadata?.full_name || user.email;
  const email = user.email;
  const provider = user.app_metadata?.provider || 'unknown';
    
  return (
    <div style={cardStyle}>
      <div style={infoStyle}>
        <h2 style={nameStyle}>{name}</h2>
        <p style={emailStyle}>{email}</p>
        <span style={providerTagStyle}>{provider.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default UserCard;
