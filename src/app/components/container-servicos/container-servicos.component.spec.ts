import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerServicosComponent } from './container-servicos.component';

describe('ContainerServicosComponent', () => {
  let component: ContainerServicosComponent;
  let fixture: ComponentFixture<ContainerServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerServicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
