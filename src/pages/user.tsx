import { Helmet } from 'react-helmet-async';

import { UserView } from '../sections/user/view';
// import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function UserPage() {

  // const data = useLoaderData()
  
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
    {/* ჩატვირთული მონაცემი:   */}
    {/* {data} */}
      <UserView />
    </>
  );
}


export const laodData = async()=> {
  await axios.post("http://xdata.rs.ge/TaxPayer/RSPublicInfo", {"IdentCode":87787})


  //   return data
} 