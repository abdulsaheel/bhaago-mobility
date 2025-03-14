import React from 'react';
import PathEditor from '@/components/path-editor';

const PathEditorPage: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Path Editor</h2>
            <PathEditor />
        </div>
    );
};

export default PathEditorPage;