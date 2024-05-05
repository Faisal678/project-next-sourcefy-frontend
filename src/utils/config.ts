const developmentConfig = {
    // Base_URL: "https://abc/",
    Base_URL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
};

// const stagingConfig = {
//     Base_URL: "https:abc",
//     Socket_URL: "http://00.00/",
// };

const defaultConfig = developmentConfig;

export default defaultConfig;
