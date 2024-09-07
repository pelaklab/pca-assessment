import React from 'react';

const InstructionsPage: React.FC = () => {
    return (
        <main className="flex h-full flex-col items-start justify-between p-24 w-3/5">
            <h1 className="my-4 text-lg text-gray-500">Instructions</h1>
            <p>Welcome to the instructions page!</p>
            <p>Here you can provide detailed instructions for your users.</p>
        </main>
    );
};

export default InstructionsPage;