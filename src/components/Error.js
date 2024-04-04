import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <>
<div>oops</div>

<h2>somthin went wrong</h2>
<h2>
    {err.status}:{err.statusText}
</h2>

        </>
        
    )
}

export default Error;