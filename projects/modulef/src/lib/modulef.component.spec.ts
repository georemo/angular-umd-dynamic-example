import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulefComponent } from './modulef.component';

describe('ModulefComponent', () => {
  let component: ModulefComponent;
  let fixture: ComponentFixture<ModulefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
