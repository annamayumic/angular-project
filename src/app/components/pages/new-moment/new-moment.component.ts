import { Component, OnInit } from '@angular/core';
import { Moments } from '../../../Moments';
import { MomentsService } from '../../../services/moments.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {
  btnText="Compartlhar"
  constructor(private momentService: MomentsService){

  }
  ngOnInit(): void {
    
  }
  async createHandler(moment: Moments){
    const formData = new FormData

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.imagem){
      formData.append("image", moment.imagem)
    }

    await this.momentService.createMoment(formData).subscribe()
    //exibir msg
    // redirect



  }
}

