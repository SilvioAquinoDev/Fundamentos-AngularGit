import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguntoComponenteComponent } from './segunto-componente.component';

describe('SeguntoComponenteComponent', () => {
  let component: SeguntoComponenteComponent;
  let fixture: ComponentFixture<SeguntoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguntoComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguntoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
