const useHttp = (sendConfig) =>{
    const fetchData = async () =>{
        const response = await fetch(sendConfig.url, {
            method: sendConfig.method ? sendConfig.method : 'GET',
            headers: sendConfig.headers ? sendConfig.headers : {},
            body: sendConfig.body ? JSON.stringify(sendConfig.body) : null
        });
        const data = await response.json();
        const array = [];
        
    }
    return fetchData
}

export default useHttp;