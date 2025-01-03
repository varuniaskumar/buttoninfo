import { useParams } from "react-router-dom";
export default function Product(){
  const { id } = useParams();
  console.log("id from other page" + id);
    return(
        <>
          <p>product</p>
        </>
    )
}