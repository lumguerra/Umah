import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoContainerComponent } from './contato-container.component';

describe('ContatoContainerComponent', () => {
  let component: ContatoContainerComponent;
  let fixture: ComponentFixture<ContatoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
