const ModelsList = ({ models }: { models: IModel[] }) => {
    return (
        <ul className="bg-input-bg border border-secondary rounded-lg shadow-md w-full max-w-lg">
            {models.map((model: IModel) => (
                <li
                    key={model.Model_ID}
                    className="p-2 border-b last:border-b-0 text-input-text"
                >
                    {model.Model_Name}
                </li>
            ))}
        </ul>
    );
};

export default ModelsList;
