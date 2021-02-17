import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { CryptoResponse } from 'src/app/models/crypto-response';
import { CryptoDataStore } from './crypto-data.store';

@Injectable()
export class CryptoDataQuery extends Query<CryptoResponse> {

  constructor(protected store: CryptoDataStore) {
    super(store);
  }

  getAllCryptoData(): Observable<CryptoResponse> {
    return this.select();
  }

}
