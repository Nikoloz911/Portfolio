import { Component, EventEmitter, Output } from '@angular/core';
import { ITranslations } from '../../Interfaces/ITranslations';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Output() dropdownOpened = new EventEmitter<boolean>();

  isOpen = false;
  currentLanguage = 'en';
  dropdownVisible = false;

  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'assets/flags/usa.webp' },
    { code: 'ka', name: 'ქართული', flag: 'assets/flags/georgia.webp' }
  ];

  translations: ITranslations = {
    en: {
      home: 'Home',
      about: 'About Me',
      projects: 'Projects',
      backend: 'Back-End'
    },
    ka: {
      home: 'მთავარი',
      about: 'შესახებ',
      projects: 'პროექტები',
      backend: 'ბექ-ენდი'
    }
  };

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
    this.dropdownVisible = this.isOpen;
    this.dropdownOpened.emit(this.dropdownVisible);
  }
  

  setLanguage(langCode: string): void {
    this.currentLanguage = langCode;
    this.isOpen = false;
    this.dropdownVisible = false;
    this.updatePageText();
    this.dropdownOpened.emit(this.dropdownVisible);
  }
  
  

  getCurrentLanguage(): Language | undefined {
    return this.languages.find(lang => lang.code === this.currentLanguage);
  }

  updatePageText(): void {
    document.querySelectorAll('[data-translate]').forEach(element => {
      let key = element.getAttribute('data-translate');
      if (key && this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
        element.textContent = this.translations[this.currentLanguage][key];
      }
    });
  }

  updateNavbarText(lang: string): void {
    let labels = this.translations[lang];

    Object.keys(labels).forEach(key => {
      let li = document.querySelectorAll(`[data-translate="${key}"]`);
      li.forEach(el => {
        let word = labels[key];
        el.innerHTML = '';

        word.split('').forEach(letter => {
          let span = document.createElement('span');
          span.className = letter === ' ' ? 'space' : 'letter';
          span.textContent = letter;
          el.appendChild(span);
        });
      });
    });
  }

  translate(key: string): string {
    if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
      return this.translations[this.currentLanguage][key];
    }
    return key;
  }

  onClickOutside(event: Event): void {
    if (!(event.target as HTMLElement).closest('.languages-dropdown')) {
      if (this.isOpen) {
        this.isOpen = false;
        this.dropdownVisible = false;
        this.dropdownOpened.emit(false);
      }
    }
  }  
}
