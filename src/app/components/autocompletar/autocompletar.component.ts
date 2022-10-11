import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocompletar',
  templateUrl: './autocompletar.component.html',
  styleUrls: ['./autocompletar.component.css']
})
export class AutocompletarComponent implements OnInit {

  countries: any[] =[
    "Argentina",
    "Brasil",
    "Bolivia",
    "Francia",
    "Italia",
    "Colombia"
  ];
  selectedCountryAdvanced: any[];
  filteredCountries: any[];

  constructor() { }

  ngOnInit(): void {
  }

  filterCountry(event:    ) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }

}
