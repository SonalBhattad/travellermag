import { Component, OnInit } from '@angular/core';
import { Editor } from 'src/app/artist/Editor';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { EditorServiceService } from 'src/app/editor-service.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})

export class PublishComponent implements OnInit {
  Editor : Editor[]=[];
  //Editor : Editor = new Editor('','','','',"yy-mm-dd hh:mm:ss");
  displayedColumns: string[] = ['id','title', 'type', 'body', 'createdon'];
  //dataSource = this.Editor;
  dataSource = new MatTableDataSource<Editor>(this.Editor);
 
  constructor(private service:EditorServiceService) { }

  ngOnInit() {
    let response = this.service.getPost()
    response.subscribe(report=>this.dataSource.data=report as Editor[]);
  }

}





