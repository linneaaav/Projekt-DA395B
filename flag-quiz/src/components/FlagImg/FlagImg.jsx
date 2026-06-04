const FlagImg = ( { flagUrl, flagAlt } ) => {
    return (
        <img src={flagUrl} alt={flagAlt} className="mx-auto py-3 w-full max-w-xs sm:max-w-sm object-contain"/>
    );
};

export default FlagImg;