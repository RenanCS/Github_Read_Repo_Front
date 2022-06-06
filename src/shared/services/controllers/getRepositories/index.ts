import { AxiosResponse } from "axios";
import { map, Observable } from "rxjs";
import api from "../../api";
import { Project, RepositoriesInputModel } from "./interface";



export const getRepository = (inputModel: RepositoriesInputModel): Observable<Project[]> => {

 return  api
    .post(`/github/getrepositories`, inputModel)
    .pipe(
      map((axiosResponse: AxiosResponse) => axiosResponse.data)
    );

};
