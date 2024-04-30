const Loading = () => {
    return (
        <div className="flex h-[80vh] justify-center items-center w-full bg-background">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-primary animate-spin absolute"></div>
        </div>
    );
};

export default Loading;