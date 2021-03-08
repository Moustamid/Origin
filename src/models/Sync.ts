import axios, { AxiosResponse } from 'axios';

export class Sync {
  //!Fetching data from 'a' server :

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  //!Saving Data :

  save(): void {
    const id = this.get('id');

    if (id) {
      //- put request
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      //-post request
      axios.post('http://localhost:3000/users/', this.data);
    }
  }
}
