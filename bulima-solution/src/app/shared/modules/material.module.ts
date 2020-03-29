import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card/';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';


const Material = [
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatRadioModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
