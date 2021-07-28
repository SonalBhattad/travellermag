import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Magazine } from '../../../Classes/magazine';
import { MagazineserviceService } from 'src/Services/magazineservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-magazinelist',
  templateUrl: './magazinelist.component.html',
  styleUrls: ['./magazinelist.component.css']
})
export class MagazinelistComponent implements OnInit {

  Magazine : Magazine = new Magazine(0,null,'',null,'',null);
  MagData : Magazine[] = [];
  displayedColumns: string[] = ['magid','magname', 'magprice', 'magtype', 'actions'];
  dataSource = new MatTableDataSource<Magazine>(this.MagData);
  show:boolean = false;

  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  message: any;
  file: File = null;
  percentDone: number;
  uploadSuccess: boolean;

  constructor(private service : MagazineserviceService, private http: HttpClient,) { }

  // selectedFile: File = null;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  msg: string;


  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showhide(){
    this.show=!this.show
  }

  onChange(event) {
    this.file = event.target.files[0];
}

  public refresh(){
    let response = this.service.getMagazine()
    response.subscribe(report=>this.dataSource.data=report as Magazine[]);
  }

  public removeUser(magid : number){
    if(confirm('are you sure to delete??')){
      this.service.deleteMag(magid).subscribe(res=>{
        this.refresh()
      });
    }
    
  }

  public regMagazine(){
  let response =this.service.regMag(this.Magazine)
  response.subscribe(data => {
    this.message = data;
    alert("magazine added");
    this.refresh()
    this.show=false;
  })
  }

public onFileChanged(event) {
  this.Magazine.coverimage = event.target.files[0];
}

onUpload() {
  console.log(this.Magazine.coverimage);
  const uploadImage = new FormData();
    uploadImage.append('file', this.Magazine.coverimage, this.Magazine.coverimage.name);
    this.http.post('http://localhost:8080/savemag', uploadImage, { observe: 'response' })
   .subscribe((response) => {
    if (response.status === 200) {
       this.message = 'Image uploaded successfully';
    } else {
      this.message = 'Image not uploaded successfully';
    }
  }
  );
}

}


