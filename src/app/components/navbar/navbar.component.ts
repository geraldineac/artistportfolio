import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @ViewChild('burgerMenu') burgerMenu!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.listen(this.burgerMenu.nativeElement, 'click', () => {
      const nav = document.querySelector('.nav') as HTMLElement; // Asegúrate de que .nav es la clase correcta
    if (nav.classList.contains('active')) {
      // Tu lógica cuando el menú está activo (se ha hecho clic y está visible)
      console.log('Menú activo, ocultando...');
      nav.classList.remove('active');
    } else {
      // Tu lógica cuando el menú no está activo (se ha hecho clic y está oculto)
      console.log('Menú inactivo, mostrando...');
      nav.classList.add('active');
    }
    });
  }

}
