import React from "react";
import { useParams } from "react-router-dom";

export function Akash(){
    const {id} = useParams();
   return(
     <>
     <h1>Hello {id}</h1>
     </>
   );
}