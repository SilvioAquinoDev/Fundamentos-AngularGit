import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNovaBranchComponent } from './teste-nova-branch.component';

describe('TesteNovaBranchComponent', () => {
  let component: TesteNovaBranchComponent;
  let fixture: ComponentFixture<TesteNovaBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesteNovaBranchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesteNovaBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
