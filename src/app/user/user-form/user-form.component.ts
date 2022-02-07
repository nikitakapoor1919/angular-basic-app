import { Component, OnInit, Input } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  //Variable declarations
  public formStatus : boolean = false;
  public formSubmitted : boolean = false;
  public userFormGroup : FormGroup;
  public myFormControl : FormControl;
  public dataLoaded : boolean = false;
  
  public nameFirstPlaceHolder : string ="First Name";
  public nameLastPlaceHolder : string ="Last Name";
  public pincodePlaceHolder : string ="Pincode";
  public contactPlaceHolder : string ="Contact Number";
  public agePlaceHolder : string ="Age";
  public emailPlaceHolder : string ="Email"
  public addressPlaceHolder : string ="Address"

  public userName : string = "Nikita" 
  
  constructor() {
    this.myFormControl = new FormControl('25');
    this.userFormGroup = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl(),
      pincode: new FormControl(),
      age: new FormControl('',[Validators.required]),
      contact: new FormControl(null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      gender: new FormControl(),
      address: new FormControl(),
      email: new FormControl(null,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
        ]),
    })
  }

  ngOnInit(): void {
    this.userFormGroup.valueChanges.subscribe(change=>{
      console.log(this.userFormGroup)
    })
  }
  onFormSubmit(): void {
    this.formStatus=true;
    this.formSubmitted = true;
    this.dataLoaded =true
    setTimeout(() => {
      this.dataLoaded =false
    }, 5000);
      if(this.userFormGroup.valid) {
        this.logData();
        this.resetForm();
      } 
      else {
        this.formStatus=true;
        this.formSubmitted = false;
      }
  }
  logData(){
    Object.keys(this.userFormGroup.controls).forEach(key => {
      console.log(key+" : "+this.userFormGroup.get(key)?.value);
    });
  }
  resetForm() { 
    this.userFormGroup.reset();
  } 
}
