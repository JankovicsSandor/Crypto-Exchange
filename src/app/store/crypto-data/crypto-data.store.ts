import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CryptoItem, CryptoResponse } from 'src/app/models/crypto-response';

export function createInitialState(): CryptoResponse {
  return new CryptoResponse();
}

@Injectable()
@StoreConfig({ name: 'crypto-data' })
export class CryptoDataStore extends Store<CryptoResponse> {

  constructor() {
    super(createInitialState());
  }

}
