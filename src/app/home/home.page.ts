import { Component, OnInit } from '@angular/core';
import { ApiConvertirService } from '../service/api-convertir.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {


  currencies: any[] = [];
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  result: number | null = null;

  objetResult: any = {
    base: "",
    amount:0,
    result: null,
    ms: 0
  };

  constructor(private currencyService: ApiConvertirService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((data) => {
      this.currencies = Object.entries(data.currencies).map(([key, value]) => ({
        code: key,       
        name: value, 
      }));

      console.log(this.currencies);
    });
  }

  convert(): void {
    this.currencyService
      .convert(this.fromCurrency, this.toCurrency, this.amount)
      .subscribe((data) => {
        this.objetResult = data;
        console.log(this.objetResult);
        console.log(this.objetResult.result[this.toCurrency]);
      });
  }

}
