import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SeguntoComponenteComponent } from './segunto-componente/segunto-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SeguntoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponenteFilhoComponent,
    ComponentePaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
