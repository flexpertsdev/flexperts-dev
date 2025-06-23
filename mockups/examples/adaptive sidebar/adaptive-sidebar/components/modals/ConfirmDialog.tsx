
import React from 'react';

interface ConfirmDialogProps {
  showConfirmDialog: boolean;
  setShowConfirmDialog: (show: boolean) => void;
  selectedContacts: string[];
  setSelectedContacts: (contacts: string[]) => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  showConfirmDialog,
  setShowConfirmDialog,
  selectedContacts,
  setSelectedContacts,
}) => {
  if (!showConfirmDialog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Delete</h3>
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete {selectedContacts.length > 1 ? `${selectedContacts.length} contacts` : 'this contact'}? This action cannot be undone.
        </p>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowConfirmDialog(false)}
            className="flex-1 py-2 px-4 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setShowConfirmDialog(false);
              setSelectedContacts([]);
            }}
            className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
