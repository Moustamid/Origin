import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  //!Fetching data from 'a' server :
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  //!Saving Data :
  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      //- put request
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      //-post request
      return axios.post(this.rootUrl, data);
    }
  }
}
