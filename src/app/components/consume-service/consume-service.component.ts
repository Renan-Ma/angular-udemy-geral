import { Component, inject, OnInit } from '@angular/core';
import { NewComponentComponent } from '../new-component/new-component.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss'
})
export class ConsumeServiceComponent implements OnInit{

  // modo novo de injetar dependencias
  #apiService = inject(ApiService);

 // modo antigo de injetar dependencias
  // constructor(
  //   private _apiService: ApiService
  // ){}

  ngOnInit(): void {
    // modo novo
    console.log(this.#apiService.name())

    //modo antigo
    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log("complete")
    })
  }
}
