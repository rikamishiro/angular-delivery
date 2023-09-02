import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PedidosItensComponent } from './components/pedidos-itens/pedidos-itens.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { MoneyPipe } from './pipes/money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PedidoComponent,
    PedidosComponent,
    PedidosItensComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
