import React, {useEffect} from "react";
import { ENDPOINTS, createAPIEndpoint } from "../api";

export const ContentModule = () => {

  const GetCabins = () => {
    createAPIEndpoint(ENDPOINTS.cabin)
      .get()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    GetCabins();
  }, []);

  return (
    <div className="col-9 h-100">
      adadad
    </div>
  )
}