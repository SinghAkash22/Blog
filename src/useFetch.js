import {useState,useEffect} from "react";

const useFetch=(url)=>
{

    const  [data,setData]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error , seterror]=useState(null);

    useEffect(()=>
    {
        const abortcontroler=new AbortController();
        setTimeout(
            ()=>
            {
                fetch(url,{signal:abortcontroler.signal})
                    .then(result=>
                    {
                        if(!result.ok)
                        {
                            throw Error('Data is Not in resource');
                        }
                        return result.json();
                    })
                    .then((data)=>
                    {
                        setData(data);
                        setisPending(false);
                        seterror(null);
                        console.log(data);
                    })
                    .catch(error=>{
                        if(error.name=='AbortError')
                        {
                            console.log('fetech abort');
                        }
                        else
                        {
                            console.log(error.message);
                            seterror(error.message);
                            setisPending(false);
                        }

                    })
            }
            ,1000  );
        return()=>abortcontroler.abort();
    },[url]);
    return {data,isPending,error};

}

export default useFetch;