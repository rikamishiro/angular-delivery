import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosItensComponent } from './pedidos-itens.component';

describe('PedidosItensComponent', () => {
  let component: PedidosItensComponent;
  let fixture: ComponentFixture<PedidosItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosItensComponent]
    });
    fixture = TestBed.createComponent(PedidosItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
