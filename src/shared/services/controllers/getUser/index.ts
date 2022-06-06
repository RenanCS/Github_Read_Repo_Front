import { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";
import api from "../../api";
import { User } from "./interface";

export const getUser = (userName: string): Observable<User> => {
 return  api
    .get<User>(`/github/getuser?userName=${userName}`)
    .pipe(
      map((axiosResponse: AxiosResponse) => axiosResponse.data)
    );
};
