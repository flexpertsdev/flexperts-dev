import { Button } from '@/components/ui/button';

export const ProfilePage = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Profile Section */}
      <div className="p-6 bg-white">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
            S
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Sarah Chen</h2>
          <p className="text-gray-600 mb-4">sarah@acmecorp.com</p>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">48h</div>
              <div className="text-sm text-gray-600">Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-sm text-gray-600">Spaces</div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 md:p-6 space-y-4">
        <Button variant="outline" className="w-full justify-start">
          Edit Profile
        </Button>
        <Button variant="outline" className="w-full justify-start">
          Security Settings
        </Button>
        <Button variant="outline" className="w-full justify-start">
          Notifications
        </Button>
        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
          Sign Out
        </Button>
      </div>
    </div>
  );
};