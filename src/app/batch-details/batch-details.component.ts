import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Create array to hold the information of batches
  public batches :any = [];
  public name : string = "";

  // Add instance of Service in constructor
  constructor(private _batchservice:BatchService, private obj : MarvellousService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this.batches = this._batchservice.GetBatchDetails();

    this.name = this.obj.fun();
  }
}
