

// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {Check} from '../services/check.service';

export class ExchangeRateController {
  constructor(
    @inject('check')
    private exchangeRateService: Check,
  ) {}
  @get('/allData')
  getall() {
    return this.exchangeRateService.getAll();
  }
  @get('/exchange-rate/{base}')
  get(@param.path.string('base') base: string) {
    return this.exchangeRateService.getAll();
  }
}
