import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { typeFilterConst } from 'src/app/constants/general.const';
import { FilterForm } from 'src/app/modesl/filter-form';
import { ItemFilter } from 'src/app/modesl/generic-filter-request.model';

@Component({
  selector: 'app-shared-filter',
  templateUrl: './shared-filter.component.html',
  styleUrls: ['./shared-filter.component.scss']
})
export class SharedFilterComponent implements OnInit {

  @Input() filters: FilterForm[] = [];
  @Output() resFilterEmmit = new EventEmitter<ItemFilter[]>();

  filterOption = typeFilterConst;

  myForm: FormGroup;
  filtrosRespuesta: ItemFilter[] = [];
  constructor(
    private fb: FormBuilder,
  ) {
    this.myForm = this.fb.group({});
  }
  ngOnInit(): void {


    // for (let index = 0; index < 10; index++) {
    //   this.myForm.addControl(`nombre_${index}`, new FormControl(null, []))
    // }

    this.filters.forEach(x => {
      this.myForm.addControl(x.name, new FormControl(null, []))
    });




  }


  search() {

    this.filtrosRespuesta = [];


    // console.log("FORMULARIO ==> ", this.myForm.getRawValue());

    this.filters.forEach(x => {

      if (this.myForm.controls[x.name].value != null) {
        if (this.myForm.controls[x.name].value?.id) {
          this.filtrosRespuesta.push(new ItemFilter(x.name, this.myForm.controls[x.name].value.id.toString()));
        }
        else {
          this.filtrosRespuesta.push(new ItemFilter(x.name, this.myForm.controls[x.name].value.toString()));
        }

      }

    });


    // console.log("this.filtrosRespuesta", this.filtrosRespuesta);
    this.resFilterEmmit.emit(this.filtrosRespuesta);

  }

  /**
   * LIMPIA EL FORMULARIO
   */
  clear() {
    this.myForm.reset();
  }


}
