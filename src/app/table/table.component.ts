import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../service/placeholder.service';

@Component({
  selector: 'app-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  placeholders: any[] = [];

  constructor(private phService: PlaceholderService) {}
  ngOnInit(): void {
    this,this.phService.getPlaceholders().subscribe((data) => this.placeholders = data);
  }

  limitarText(texto:string){
    return texto.length > 30 ? texto.substring(0, 30) + '...' : texto;
  }
}
