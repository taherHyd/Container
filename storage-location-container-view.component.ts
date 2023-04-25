import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-location-container-view',
  templateUrl: './storage-location-container-view.component.html',
  styleUrls: ['./storage-location-container-view.component.scss']
})
export class StorageLocationContainerViewComponent implements OnInit {
  rowValues = [1, 2, 3,4,5,6];  //todo get from parent
  columnValues = [1, 2, 3,4,5,6,7]; //tod0  get from parent
  sampleRecords: SampleData[] = []; //todo get from parent component.
  currentAccessioNumber: string;

  isShowDetail: boolean;
  constructor() { }

  ngOnInit(): void {
    //this.isShowDetail = true;
    this.sampleRecords.push(
      {
        "accessionNumber": "sample 1",
        "row": 1,
        "position": 1,
      }
    )
  }

  onPrintReview(){

  }

  checkForSpecimen(row: number, pos: number): boolean
  {
    this.currentAccessioNumber = '';
    let result = this.sampleRecords.find( x => x.row == row && x.position == pos);
    if(result)
    {
      this.currentAccessioNumber = result.accessionNumber;
      return true;
    }
    else
      return false;
  }

}

class SampleData{
  accessionNumber: string;
  row: number;
  position: number;
}
