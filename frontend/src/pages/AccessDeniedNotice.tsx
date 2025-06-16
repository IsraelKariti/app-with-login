import { AlertTriangle } from 'lucide-react'; // optional
import LogoutButton from '../buttons/Logout';

const AccessDeniedNotice = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white border border-red-300 shadow-lg rounded-2xl p-6 text-center space-y-4">
        <div className="flex justify-center text-red-500">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          Access Restricted
        </h2>
        <p className="text-gray-600">
          You’ve successfully logged in with Google, but your account isn’t listed in our company database.
          Please contact your supervisor to request access.
        </p>
      </div>
    </div>
    <LogoutButton/>
    </>
  );
};

export default AccessDeniedNotice;
