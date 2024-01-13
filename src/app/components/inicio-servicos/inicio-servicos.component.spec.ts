import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioServicosComponent } from './inicio-servicos.component';

describe('InicioServicosComponent', () => {
  let component: InicioServicosComponent;
  let fixture: ComponentFixture<InicioServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
