

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{progress}%</span>
            </div>
            <div className="relative w-full bg-gray-200 rounded h-4">
                <div
                    className="absolute h-full bg-blue-600 rounded"
                    style={{ width: `${progress}%` }}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
